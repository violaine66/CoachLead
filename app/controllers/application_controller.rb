class ApplicationController < ActionController::Base
  before_action :authenticate_user!

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
    devise_parameter_sanitizer.permit(:sign_up, keys: [:photo])
    devise_parameter_sanitizer.permit(:account_update, keys: [:photo])
  end

end
