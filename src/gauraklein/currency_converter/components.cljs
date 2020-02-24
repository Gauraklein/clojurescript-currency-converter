(ns gauraklein.currency-converter.components
  (:require
   [clojure.string :as str]
   [re-frame.core :as rf]
   [gauraklein.currency-converter.fetch-data :refer [fetch-conversion-rate]]
   [gauraklein.currency-converter.state :refer [app-state]]
   [oops.core :refer [ocall oget]]))

;; -----------------------------------------------------------------------------
;; Events

(rf/reg-event-db
  :initialize
    (fn [_, _]
      {:base-amount 1
       :base-currency-code "USD"
        ;; map of {"USD_EUR" 0.923289, "USD_IDR" 13693.75}, etc
       :conversion-rates {}
        ;; will be a map of {:USD "United States Dollar", :CAD "Canadian Dollar"}, etc
       :currencies nil
       :fetching-conversion-rate? false
       :fetching-currencies-list? true
       :target-currency-code "EUR"}))

(defn- change-base-currency [new-code]
  (swap! app-state assoc :base-currency-code new-code))

(defn- change-target-currency [new-code]
  (swap! app-state assoc :target-currency-code new-code))

(defn- fetch-conversion-rate-success [rate]
  (swap! app-state (fn [state]
                     (-> state
                         ;; add this rate to our map of conversion rates
                         (update-in [:conversion-rates] merge rate)
                         ;; toggle loading flag
                         (assoc :fetching-conversion-rate? false)))))

(defn- fetch-conversion-rate-error []
  (js/console.error "Failed to fetch conversion rate."))
  ;; TODO: show UI error here

(defn- click-convert-btn []
  ;; set the loading state
  (swap! app-state assoc :fetching-conversion-rate? true)
  ;; fetch the conversion rate
  (let [base-code (:base-currency-code @app-state)
        target-code (:target-currency-code @app-state)
        pair-code (str base-code "_" target-code)]
    (fetch-conversion-rate
      pair-code
      fetch-conversion-rate-success
      fetch-conversion-rate-error)))

;; -----------------------------------------------------------------------------
;; React Components

(defn- compare-currency-name [a b]
  (compare (second a) (second b)))

(defn CurrencySelect [{:keys [current-value change-fn]}]
  (let [currencies (:currencies @app-state)
        sorted-currencies (sort compare-currency-name currencies)]
    [:select.margin.select
      {:on-change (fn [js-evt]
                    (let [new-value (oget js-evt "currentTarget.value")]
                      (when (fn? change-fn)
                        (change-fn new-value))))
       :value current-value}
      (for [[currency-code currency-name] sorted-currencies]
        [:option {:key currency-code :value currency-code}
          (str currency-name " (" currency-code) ")"])]))

(defn BaseCurrencySelect []
  [CurrencySelect {:current-value (:base-currency-code @app-state)
                   :change-fn change-base-currency}])

(defn TargetCurrencySelect []
  [CurrencySelect {:current-value (:target-currency-code @app-state)
                   :change-fn change-target-currency}])

(defn BaseAmountInput []
  (let [amount (:base-amount @app-state)]
    [:input#baseAmount.margin
      {:type "number"
       :placeholder "Amount to convert"
       :name "base-amount"
       :value amount
       :on-change (fn [js-evt]
                    (let [new-amount (-> (oget js-evt "currentTarget.value")
                                         js/parseFloat)
                          new-amount (if (js/Number.isNaN new-amount) nil new-amount)]
                      (swap! app-state assoc :base-amount new-amount)))}]))

(defn LoadingSpinner []
  [:div.lds-ring
   [:div]
   [:div]
   [:div]
   [:div]])

(defn ConvertBtn []
  [:input#button.margin
    {:on-click click-convert-btn
     :type "button"
     :value "Convert"}])

(defn ConversionResult []
  (let [current-state @app-state
        base-code (:base-currency-code current-state)
        target-code (:target-currency-code current-state)
        pair-code (str base-code "_" target-code)
        conversion-rate (get-in current-state [:conversion-rates pair-code])
        base-amount (:base-amount current-state)
        target-amount (* base-amount conversion-rate)]
    (when (and (number? target-amount)
               (not (js/Number.isNaN target-amount)))
      [:h1 (.toFixed target-amount 2)])))

(defn- show-result-section? []
  (let [state @app-state
        base-code (:base-currency-code state)
        target-code (:target-currency-code state)
        pair-code (str base-code "_" target-code)]
    (and (integer? (:base-amount state))
         (not (str/blank? base-code))
         (not (str/blank? target-code))
         (or (:fetching-conversion-rate? state)
             (get-in state [:conversion-rates pair-code])))))

(defn MainAppBody []
  [:div#content
    [:h1 "ClojureScript Currency Converter"]
    [BaseAmountInput]
    [BaseCurrencySelect]
    [:h3 "To"]
    [TargetCurrencySelect]
    [ConvertBtn]
    (when (show-result-section?)
      [:div#result
        (if (:fetching-conversion-rate? @app-state)
          [LoadingSpinner]
          [ConversionResult])])])

(defn CurrencyConverterApp
  "the root React component"
  []
  (rf/dispatch-sync [:initialize]) 
  (if (:fetching-currencies-list? @app-state)
    [LoadingSpinner]
    [MainAppBody]))
