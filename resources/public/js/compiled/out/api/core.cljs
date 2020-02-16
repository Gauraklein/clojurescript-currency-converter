(ns api.core
    (:require
     [API_KEY_NS :refer (API_KEY)]   
     [CONVERT_API_KEY_NS :refer (CONVERT_API_KEY)] 
     [simpleclojureapp.core :refer [app-state]] 
     [cljs.core.async :refer [<!]] [cljs-http.client :as http])
    (:require-macros [cljs.core.async.macros :refer [go]]))

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
        (swap! app-state merge {:conversion-rate (get (:body response) query)
                                :converted-amount (* (:base-amount @app-state) (:conversion-rate @app-state))
                                :display-converted-amount true}))))


;; function that takes user inputs, adds them to atom then calls get-conversion-rate 
(defn convert-currency-fn []
  (swap! app-state merge {:display-converted-amount "loading"
                          :base-amount (.-value (.getElementById js/document "base-amount"))
                          :base-currency-type (.-value (.getElementById js/document "base-currency-type"))
                          :desired-currency-type (.-value (.getElementById js/document "converted-currency-type"))})
  (get-conversion-rate (:base-currency-type @app-state) (:desired-currency-type @app-state)))