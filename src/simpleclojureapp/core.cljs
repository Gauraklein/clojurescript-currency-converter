(ns simpleclojureapp.core
    (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "This text is printed from src/simpleclojureapp/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "Hello world!" :number 4349}))


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
      [:h1 "TESTING"]
      [:h3 (:text @app-state)]
      [:p [* (:number @app-state) (:number @app-state)]]])


(defn hello-world []
  [:div
   [:h1 (:text @app-state)]
   [:h3 "Edit this and watch it chanasdfksadjfslkdge!"]
   [:p "BROCCOLI"]
   (* 4 4 4 4)
   [:div
    [test-fn]]])
    



   
   

(reagent/render-component [hello-world]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

