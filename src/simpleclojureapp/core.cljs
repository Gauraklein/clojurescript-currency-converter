(ns simpleclojureapp.core
    (:require
     [API_KEY_NS :refer (API_KEY)]   
     [CONVERT_API_KEY_NS :refer (CONVERT_API_KEY)]  
     [reagent.core :as reagent :refer [atom]]
     [cljs.core.async :refer [<!]] [cljs-http.client :as http])
    (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:title "ClojureScript Converter"
                          :base-amount .0002
                          :base-currency-type "string"
                          :conversion-rate .0923
                          :desired-currency-type "string"
                          :converted-amount 1.1
                          :display-converted-amount false
                          :currencies {:display "test", :display1 "render"}}))


;; API call to get all possible currencies
(go (let [response (<! (http/get (+ "http://data.fixer.io/api/symbols?access_key=" (API_KEY))
                                 {:with-credentials? false}))] 
      (swap! app-state assoc-in [:currencies] (js->clj (get-in response [:body :symbols]) :keywordize-keys true))))

;; function that will set the converted amount on the atom
(defn converted-amount []
  (println (* (:base-amount @app-state) (:conversion-rate @app-state)), "this is the converted amount"))
  

;; API call to get conversion rate/ having issues with getting the value from the json response
(defn get-conversion-rate [base-currency desired-currency]
  (go (let [response (<! (http/get (str "https://free.currconv.com" "/api/v7/convert?q=" base-currency "_" desired-currency "&compact=ultra&apiKey=" (CONVERT_API_KEY)) 
                                   {:with-credentials? false}))]
        (println (:body response))
        (def query (keyword (str base-currency "_" desired-currency)))
        (println query)
        (def conversion-rate (get (:body response) query))
        (println conversion-rate, "this is the conversion rate")
        (swap! app-state assoc-in [:conversion-rate] conversion-rate)
        (println (:conversion-rate @app-state), "conversion rate in atom")
        (swap! app-state assoc-in [:converted-amount] (* (:base-amount @app-state) (:conversion-rate @app-state)))
        (swap! app-state assoc-in [:display-converted-amount] true))))


;; function to print converted value 
(defn convert-currency-fn []
  (swap! app-state assoc-in [:base-amount] (.-value (.getElementById js/document "base-amount")))
  (swap! app-state assoc-in [:base-currency-type] (.-value (.getElementById js/document "base-currency-type")))
  (swap! app-state assoc-in [:desired-currency-type] (.-value (.getElementById js/document "converted-currency-type")))
  (get-conversion-rate (:base-currency-type @app-state) (:desired-currency-type @app-state)))
 
;; select for base currency
(defn base-currency-select []
  [:select {:id "base-currency-type" :class "margin select"}
    (for [currency (:currencies @app-state)]
      ^{:key (keys [currency])}
      [:option {:value (keys [currency])} (vals [currency])])])

;; select for desired currency     
(defn converted-currency-select []
  [:select {:id "converted-currency-type" :class "margin select"}
    (for [currency (:currencies @app-state)]
      ^{:key (keys [currency])}
      [:option {:value (keys [currency])} (vals [currency])])])

;; main app
(defn currency-conversion-app []
  [:div {:id "content"}
    [:h1 (:title @app-state)]
    [:input {:type "number"
             :placeholder "Amount to convert"
             :name "base-amount"
             :id "base-amount"
             :class "margin"}]
    (base-currency-select)
    [:h3 "TO"]
    (converted-currency-select)
    [:input {:type "button" :value "Convert" :class "margin" :id "button" :on-click convert-currency-fn}]
    [:div {:id "result"}
      (if (= (:display-converted-amount @app-state) true)
        [:h1 (:converted-amount @app-state) " " (:desired-currency-type @app-state)])]])
    ;; a div that displays the converted amount based on an if statement should go here

(reagent/render-component [currency-conversion-app]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

