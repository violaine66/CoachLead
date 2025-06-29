# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class PlayerProfil < ApplicationRecord
  belongs_to :user
  before_destroy :destroy_user_related_records
  has_one_attached :photo

  # validations
  

  validates :weight, numericality: { greater_than_or_equal_to: 30 }, allow_nil: true
  validates :children_count, numericality: { only_integer: true, greater_than_or_equal_to: 0 }, allow_nil: true


  def destroy_user_related_records
    return unless user.present?

    user.attendances.destroy_all
    user.job_load_evaluations.destroy_all
    user.match_performances.destroy_all
    user.pre_training_evaluations.destroy_all
    user.after_training_evaluations.destroy_all
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
    profils = all # Pas d'includes ici
    total = profils.map(&:total_penalties).sum
    count = profils.size
    return 0 if count == 0
    (total.to_f / count).round(2)
  end

  def age
    return nil unless date_of_birth.present?

    today = Date.today
    age = today.year - date_of_birth.year
    age -= 1 if today < date_of_birth + age.years # Ajustement si l'anniversaire n'est pas encore passé cette année
    age
  end

  def birthday_today?
    return false unless date_of_birth.present?

    today = Date.today
    today.day == date_of_birth.day && today.month == date_of_birth.month
  end

end
