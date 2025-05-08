class PlayerProfil < ApplicationRecord
  belongs_to :user
  before_destroy :destroy_user_related_records
  has_one_attached :photo

  # validations
  validates :age, numericality: { only_integer: true, greater_than: 0 }
  validates :weight, numericality: { greater_than_or_equal_to: 30 }
  validates :children_count, numericality: { only_integer: true, greater_than_or_equal_to: 0 }

  def destroy_user_related_records
    return unless user.present?

    user.attendances.destroy_all
    user.job_load_evaluations.destroy_all
    user.match_performances.destroy_all
  end

  def full_name
    "#{first_name} #{last_name}"
  end

    def total_penalties
    user.attendances
        .where(status: [:absent, :late])
        .count
  end

  # Montant total en euros (1€ par pénalité)
  def total_penalties_amount
    total_penalties
  end

  def self.average_penalties
    profils = all.includes(user: :attendances)
    total = profils.map(&:total_penalties).sum
    count = profils.size
    return 0 if count == 0
    (total.to_f / count).round(2)
  end

end
