(ns simpleclojureapp.core
    (:require
     [API_KEY_NS :refer (API_KEY)]     
     [reagent.core :as reagent :refer [atom]]
     [cljs.core.async :refer [<!]] [cljs-http.client :as http])
    (:require-macros [cljs.core.async.macros :refer [go]]))

  
; (require '[clojure.core.async :as async :refer :all])

(enable-console-print!)

(println (API_KEY))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "CONVERT YOUR CURRENCIES" :number 4349}))


(go (let [response (<! (http/get (+ "http://data.fixer.io/api/symbols?access_key=" (API_KEY))
                                 {:with-credentials? false}))] 
      (println (:status response))
      (println (:body response))))


 


;; routes

; All Currencies 
; http://data.fixer.io/api/symbols?access_key=API_KEY

; make a map of this and add it to the select as options store that in the atom 

; Conversion 
; http://data.fixer.io/api/convert
;     ? access_key = API_KEY
;     & from = CURRENCY1
;     & to = CURRENCY2
;     & amount = AMOUNT

    
(defn test-fn []
  (println "convert clicked"))



(defn currency-convert []
  [:center
    [:h1 (:text @app-state)]
    [:input]
    [:select
      [:option "option 1"]
      [:option "option 2"]]
    [:h3 "TO"]
    [:input]
    [:select
      [:option "Option 1"]
      [:option "Option 2"]]
    [:input {:type "button" :value "Convert" :on-click test-fn}]])

  
    


   
   

(reagent/render-component [currency-convert]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

