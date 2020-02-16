(ns gauraklein.currency-converter.prod
  (:require
    [gauraklein.currency-converter.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
