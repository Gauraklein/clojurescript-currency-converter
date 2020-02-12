(ns simpleclojureapp.core
    (:require
     [API_KEY_NS :refer (API_KEY)]   
     [CONVERT_API_KEY_NS :refer (CONVERT_API_KEY)] 
     [components.core :refer [base-currency-select converted-currency-select base-amount-input render-result-conditionals]] 
     [reagent.core :as reagent :refer [atom]]
     [cljs.core.async :refer [<!]] [cljs-http.client :as http])
    (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

;; ATOM 
(defonce app-state (atom {:title "ClojureScript Currency Converter"
                          :base-amount .0002
                          :base-currency-type "string"
                          :conversion-rate .0923
                          :desired-currency-type "string"
                          :converted-amount 1.1
                          :display-converted-amount false
                          :currencies {:display "test", :display1 "render"}}))


;; API call onload, returns JSON with all currencies as key/value pairs
;; converts to sorted hash map then writes to atom
(go (let [response (<! (http/get (+ "https://data.fixer.io/api/symbols?access_key=" (API_KEY))
                                 {:with-credentials? false}))] 
      (swap! app-state assoc-in [:currencies] (into (sorted-map) (sort-by first (seq (get-in response [:body :symbols])))))))


;; API call that returns conversion rate based on user selected currencies
;; converts the base amount and writes to atom
(defn get-conversion-rate [base-currency desired-currency]
  (go (let [response (<! (http/get (str "https://free.currconv.com"
                                      "/api/v7/convert?q=" 
                                      base-currency "_" desired-currency 
                                      "&compact=ultra&apiKey=" (CONVERT_API_KEY)) 
                                   {:with-credentials? false}))]
        (def query (keyword (str base-currency "_" desired-currency)))
        (swap! app-state assoc-in [:conversion-rate] (get (:body response) query))
        (swap! app-state assoc-in [:converted-amount] (* (:base-amount @app-state) (:conversion-rate @app-state)))
        (swap! app-state assoc-in [:display-converted-amount] true))))


;; function that takes user inputs, adds them to atom then calls get-conversion-rate 
(defn convert-currency-fn []
  (swap! app-state assoc-in [:display-converted-amount] "loading")
  (swap! app-state assoc-in [:base-amount] (.-value (.getElementById js/document "base-amount")))
  (swap! app-state assoc-in [:base-currency-type] (.-value (.getElementById js/document "base-currency-type")))
  (swap! app-state assoc-in [:desired-currency-type] (.-value (.getElementById js/document "converted-currency-type")))
  (get-conversion-rate (:base-currency-type @app-state) (:desired-currency-type @app-state)))
 

;; main app
(defn currency-conversion-app []
  [:div {:id "content"}
    [:h1 (:title @app-state)]
    [base-amount-input]
    [base-currency-select (:currencies @app-state)]
    [:h3 "To"]
    [converted-currency-select (:currencies @app-state)]
    [:input {:type "button" :value "Convert" :class "margin" :id "button" :on-click convert-currency-fn}]
    [:div {:id "result"}
      [render-result-conditionals 
        (:display-converted-amount @app-state) 
        (:converted-amount @app-state) 
        (:desired-currency-type @app-state)]]])
      

(reagent/render-component [currency-conversion-app]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
