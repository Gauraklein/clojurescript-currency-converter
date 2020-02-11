(ns simpleclojureapp.core
    (:require
    ;  [cheshire.core :refer [:all]] 
     [API_KEY_NS :refer (API_KEY)]   
     [CONVERT_API_KEY_NS :refer (CONVERT_API_KEY)]  
     [reagent.core :as reagent :refer [atom]]
     [cljs.core.async :refer [<!]] [cljs-http.client :as http])
    (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(println (* (float 1.2) (float 3.4)))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:title "CONVERT YOUR CURRENCIES"
                          :base-amount .0002
                          :conversion-rate .0923
                          :converted-amount 1.1
                          :currencies {:display "test", :display1 "render"}}))


;; API call to get all possible currencies
(go (let [response (<! (http/get (+ "http://data.fixer.io/api/symbols?access_key=" (API_KEY))
                                 {:with-credentials? false}))] 
      ; (println (:status response))
      (swap! app-state assoc-in [:currencies] (js->clj (get-in response [:body :symbols]) :keywordize-keys true))))

(defn converted-amount []
  (println (* (:base-amount @app-state) (:conversion-rate @app-state))))
  

;; API call to get conversion rate
(defn conversion-rate [base-currency desired-currency]
  (go (let [response (<! (http/get (str "https://free.currconv.com" "/api/v7/convert?q=" base-currency "_" desired-currency "&compact=ultra&apiKey=" (CONVERT_API_KEY)) 
                                   {:with-credentials? false}))]
        (println (:status response))
        (def query (+ base-currency "_" desired-currency))
        (println query)
        (swap! app-state assoc-in [:conversion-rate] (float (js->clj (get-in response [:body :query]))))
        (println (:conversion-rate @app-state), "conversion rate in atom")
        (converted-amount))))


;; function to print converted value 
(defn convert-currency-fn []
  (println "convert clicked")
  (def base-amount (.-value (.getElementById js/document "base-amount")))
  (def base-currency-type (.-value (.getElementById js/document "base-currency-type")))
  (def desired-currency-type (.-value (.getElementById js/document "converted-currency-type")))
  (swap! app-state assoc-in [:base-amount] (float base-amount))
  (println (:base-amount @app-state), "base-amount variable", base-currency-type, "base currency", desired-currency-type, "desired currency")
  (conversion-rate base-currency-type desired-currency-type)
  (println (* (float base-amount) (:conversion-rate @app-state)), "converted amount"))
 
;; select for base currency
(defn base-currency-select []
  [:select {:id "base-currency-type"}
    (for [currency (:currencies @app-state)]
      ^{:key (keys [currency])}
      [:option {:value (keys [currency])} (vals [currency])])])

;; select for desired currency     
(defn converted-currency-select []
  [:select {:id "converted-currency-type"}
    (for [currency (:currencies @app-state)]
      ^{:key (keys [currency])}
      [:option {:value (keys [currency])} (vals [currency])])])

;; main app
(defn currency-conversion-app []
  [:center
    [:h1 (:title @app-state)]
    [:input {:type "number"
             :name "base-amount"
             :id "base-amount"}]
    ; (currency-input [:base-amount @app-state])
    (base-currency-select)
    [:h3 "TO"]
    (converted-currency-select)
    ; (currency-list [:currencies @app-state])
    [:input {:type "button" :value "Convert" :on-click convert-currency-fn}]])
    

(reagent/render-component [currency-conversion-app]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

