class AfterTrainingEvaluation < ApplicationRecord
  belongs_to :user
  belongs_to :training

  validates :after_intensity, numericality: { only_integer: true, greater_than_or_equal_to: 0 }, allow_nil: true
  validates :after_fatigue, numericality: { only_integer: true, greater_than_or_equal_to: 0 }, allow_nil: true
  validates :pleasure, inclusion: { in: [true, false] }

  # Scopes
  validates :user_id, uniqueness: { scope: :training_id, message: "a déjà rempli une évaluation pour cet entraînement." }

end
