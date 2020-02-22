(ns gauraklein.currency-converter.state
  (:require
    [reagent.core :as reagent]))

(def initial-state
  {:base-amount 1
   :base-currency-code "USD"
   ;; map of {"USD_EUR" 0.923289, "USD_IDR" 13693.75}, etc
   :conversion-rates {}
   ;; will be a map of {:USD "United States Dollar", :CAD "Canadian Dollar"}, etc
   :currencies nil
   :fetching-conversion-rate? false
   :fetching-currencies-list? true
   :target-currency-code "EUR"})

(defonce app-state (reagent/atom initial-state))
