# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class MatchPerformance < ApplicationRecord
  belongs_to :user
  has_many :yellow_cards, dependent: :destroy
  accepts_nested_attributes_for :yellow_cards, allow_destroy: true

  validates :played, inclusion: { in: [true, false] }
  validates :match_date, presence: true
  validates :note_match, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }, allow_nil: true

    scope :for_player_on_date, ->(user_id, match_date) {
    where(user_id: user_id, match_date: match_date)
  }

  # Validation d'unicité pour éviter doublons
  validates :user_id, uniqueness: { scope: :match_date, message: "a déjà une performance enregistrée pour cette date" }

end
