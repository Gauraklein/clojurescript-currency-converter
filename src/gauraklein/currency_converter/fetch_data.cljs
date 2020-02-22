(ns gauraklein.currency-converter.fetch-data
  (:require
   [ajax.core :refer [GET]]))

;; https://data.fixer.io/api/symbols?access_key=b211d70069e4499154eb9eec0b5fe37d
(def fixer-api-key "b211d70069e4499154eb9eec0b5fe37d")

;; https://free.currconv.com/api/v7/convert?q=AED_ARS&compact=ultra&apiKey=c1edbd9282a830737a82
(def currconv-api-key "c1edbd9282a830737a82")

(defn- conversion-rate-url [pair-code]
  (str "https://free.currconv.com"
       "/api/v7/convert?q=" pair-code
       "&compact=ultra"
       "&apiKey=" currconv-api-key))

(defn fetch-conversion-rate [pair-code success-fn error-fn]
  (GET (conversion-rate-url pair-code)
    {:handler success-fn
     :error-handler error-fn
     :response-format :json}))

(defn- currencies-list-url []
  (str "https://data.fixer.io/api/symbols?access_key=" fixer-api-key))

(defn fetch-currencies
  "Fetches a list of currencies and calls success-fn with the result
   or error-fn if we failed to load the list"
  [success-fn error-fn]
  (GET (currencies-list-url)
    {:handler success-fn
     :error-handler error-fn
     :response-format :json}))
