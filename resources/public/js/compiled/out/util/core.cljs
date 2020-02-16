(ns util.core)

(defn by-id [id]
  (.getElementById js/document id))

(defn get-value [id]
  (.-value (by-id id)))