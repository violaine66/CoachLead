# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
          authentication_keys: [:pseudo]


  # Associations
  has_many :pre_training_evaluations
  has_many :trainings, through: :pre_training_evaluations, source: :training

  has_many :after_training_evaluations
  has_many :trainings, through: :after_training_evaluations, source: :training

  has_many :attendances
  has_many :job_load_evaluations
  has_many :match_performances
  has_one :player_profil, dependent: :destroy
  has_one_attached :avatar

  # Validations
  validates :email, uniqueness: true, allow_blank: true
  validates :password, presence: true, length: { minimum: 6, message: I18n.t('activerecord.errors.models.user.attributes.password.too_short') }
  validates :password_confirmation, confirmation: { message: I18n.t('activerecord.errors.models.user.attributes.password_confirmation.confirmation') }
  validates :pseudo, presence: true, uniqueness: { case_sensitive: false }
  enum role: { joueur: "joueur", entraineur: "entraineur"}



  def full_name
    if player_profil.present?
      "#{player_profil.first_name} #{player_profil.last_name}"
    end
  end

  def buts
    match_performances.sum(:buts)
  end

  def passes
    match_performances.sum(:passes)
  end

  # Email n'est pas requis à l'inscription (mais le devient si on veut la récupération)
  def email_required?
    false
  end

  def email_changed?
    false
  end

end

# Mais… Devise attend un email valide pour certaines opérations (notamment recoverable), donc je te recommande quand même de préremplir un email par défaut
#  dans les seeds ou via un formulaire admin. Ex : player1@coachlead.com.
