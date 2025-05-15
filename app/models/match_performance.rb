# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class MatchPerformance < ApplicationRecord
  belongs_to :user
  validates :yellow_card, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :played, inclusion: { in: [true, false] }
  validates :match_date, presence: true
end
