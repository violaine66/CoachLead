# © 2025 Violaine Soulas Tous droits réservés.
#  Propriété exclusive de Violaine Soulas.
#  Toute reproduction, même partielle, est interdite sans l'autorisation écrite de Violaine Soulas.
class ApplicationController < ActionController::Base
  before_action :authenticate_user!
    before_action :configure_permitted_parameters, if: :devise_controller?

  include Pundit::Authorization

  # Pundit: allow-list approach
  after_action :verify_authorized, unless: -> { skip_pundit? || action_name == "index" }
  after_action :verify_policy_scoped, if: :policy_scope_needed?


  private

  def skip_pundit?
    is_devise = devise_controller?

    is_devise || params[:controller] =~ /(^(rails_)?admin)|(^pages$)/
  end
  def policy_scope_needed?
    action_name == "index" && !skip_pundit?
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:avatar, :photo])
    devise_parameter_sanitizer.permit(:account_update, keys: [:avatar, :photo])
  end

end
