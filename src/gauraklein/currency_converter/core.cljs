(ns gauraklein.currency-converter.core
  (:require
   [gauraklein.currency-converter.components :refer [CurrencyConverterApp]]
   [gauraklein.currency-converter.fetch-data :refer [fetch-currencies]]
   [gauraklein.currency-converter.state :refer [app-state]]
   [gauraklein.currency-converter.util :as util]
   [goog.functions :as gfunctions]
   [reagent.core :as reagent]))

(enable-console-print!)

(defn on-figwheel-reload []
  (js/console.log "Figwheel has reloaded."))

;; NOTE: this is a "run once" function
(def begin-rendering!
  (gfunctions/once
    (fn []
      (reagent/render-component [CurrencyConverterApp] (util/by-id "appContainer")))))

(defn- fetch-currencies-error []
  (js/console.error "Failed to fetch currencies list."))
  ;; TODO: show UI error here

(defn fetch-currencies-success [result]
  (if (get result "success")
    (swap! app-state assoc :currencies (get result "symbols")
                           :fetching-currencies-list? false)
    (fetch-currencies-error)))

;; NOTE: this is a "run once" function
(def init!
  "global init"
  (gfunctions/once
    (fn []
      (fetch-currencies fetch-currencies-success fetch-currencies-error)
      (begin-rendering!))))

(init!)
