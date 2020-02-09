(ns simpleclojureapp.core
    (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "This text is printed from src/simpleclojureapp/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "CONVERT YOUR CURRENCIES" :number 4349}))


;; routes

; All Currencies 
; http://data.fixer.io/api/symbols?access_key=API_KEY

; Conversion 
; http://data.fixer.io/api/convert
;     ? access_key = API_KEY
;     & from = CURRENCY1
;     & to = CURRENCY2
;     & amount = AMOUNT

    
(defn test-fn []
     [:div#test {:style {:color "green"}}
      [:input]
      [:button "hello"]
      [:h3 (:text @app-state)]
      [:p [* (:number @app-state) (:number @app-state)]]])


(defn currency-convert []
  [:div
    [:h1 (:text @app-state)]
    [:input]
    [:select
      [:option "option 1"]
      [:option "option 2"]]
    [:h3 "TO"]
    [:input]
    [:select
      [:option "Ooltion 1"]
      [:option "Option 2"]]
    [:button "Convert"]])

  
    



   
   

(reagent/render-component [currency-convert]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

