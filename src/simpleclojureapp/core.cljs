(ns simpleclojureapp.core
    (:require
    ;  [cheshire.core :refer [:all]] 
     [API_KEY_NS :refer (API_KEY)]     
     [reagent.core :as reagent :refer [atom]]
     [cljs.core.async :refer [<!]] [cljs-http.client :as http])
    (:require-macros [cljs.core.async.macros :refer [go]]))

  
; (require '[clojure.core.async :as async :refer :all])

(enable-console-print!)

(println (API_KEY))

;; define your app data so that it doesn't get over-written on reload
(defonce app-state (atom {:text "CONVERT YOUR CURRENCIES" 
                          :number 4349
                          :currencies [{:display "test"}
                                       {:display "render"}]}))



(go (let [response (<! (http/get (+ "http://data.fixer.io/api/symbols?access_key=" (API_KEY))
                                 {:with-credentials? false}))] 
      (println (:status response))
      (println (:body response))
      (swap! app-state assoc-in [:currencies] (into-array (get-in response [:body :symbols])))
      (prn @app-state, "this is the app state")))
      


 


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

(defn currency-select []
  [:select
    (for [currency (:currencies @app-state)]
      [:option currency])])
; (defn currency-list [currencies]
;   [:div
;     [:p "HELLO"
;       (for [currency [currencies]])
;       [:p (:key currency)]]])

; (defn map-currency [currency]
;   (prn (concat ":display" currency), "printing"))
  
  ; [:p currency])
    

(defn currency-convert []
  [:center
    [:h1 (:text @app-state)]
    [:input]
    (currency-select)
    [:h3 "TO"]
    [:input]
    (currency-select)
    ; (currency-list [:currencies @app-state])
    [:input {:type "button" :value "Convert" :on-click test-fn}]])
        
      
    
    
    
    



   
   

(reagent/render-component [currency-convert]
                          (. js/document (getElementById "app")))

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

