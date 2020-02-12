(ns components.core)

(defn base-currency-select [currencies-map]
  [:select {:id "base-currency-type" :class "margin select"}
    (for [currency currencies-map]
      ^{:key (keys [currency])}
      [:option {:value (keys [currency])} (vals [currency])])])

(defn converted-currency-select [currencies-map]
  [:select {:id "converted-currency-type" :class "margin select"}
    (for [currency currencies-map]
      ^{:key (keys [currency])}
      [:option {:value (keys [currency])} (vals [currency])])])

(defn base-amount-input []
  [:input {:type "number"
           :placeholder "Amount to convert"
           :name "base-amount"
           :id "base-amount"
           :class "margin"}])

(defn render-result-conditionals [display-converted-amount converted-amount desired-currency-type]
  (if (= display-converted-amount "loading")
    [:div {:class "lds-ring"}
      [:div]
      [:div]
      [:div]
      [:div]])
  (if (= display-converted-amount true)
    [:h1 (float (/ (int (* 100 converted-amount)) 100)) " " desired-currency-type]))
