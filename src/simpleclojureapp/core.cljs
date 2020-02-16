(ns simpleclojureapp.core
    (:require
     [api.core :refer [get-conversion-rate convert-currency-fn]]
     [components.core :refer [base-currency-select converted-currency-select base-amount-input render-result-conditionals]] 
     [reagent.core :as reagent :refer [atom]]))

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
