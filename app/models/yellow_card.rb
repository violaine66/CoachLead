class YellowCard < ApplicationRecord
  belongs_to :match_performance

  enum reason: {
    faute_sportive: 0,
    comportement_antisportif: 1
  }

  validates :reason, presence: true
end


