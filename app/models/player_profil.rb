class PlayerProfil < ApplicationRecord
  belongs_to :user

  # validations
  validates :age, numericality: { only_integer: true, greater_than: 0 }
  validates :weight, numericality: { greater_than_or_equal_to: 30 }
  validates :children_count, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
end
