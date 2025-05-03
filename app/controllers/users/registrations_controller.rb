# app/controllers/users/registrations_controller.rb
class Users::RegistrationsController < Devise::RegistrationsController
  before_action :authenticate_user!

  # Afficher le formulaire de modification de la photo
  def edit_avatar
    # Pas besoin d'ajouter de logique ici, on utilise la vue
  end

  # Mettre à jour uniquement l'avatar
  def update_avatar
    if current_user.update(avatar_params)
      redirect_to edit_avatar_user_path, notice: 'Votre photo a été mise à jour.'
    else
      render :edit_avatar, alert: 'Une erreur est survenue lors de la mise à jour de votre photo.'
    end
  end

  private

  # Autoriser seulement l'avatar
  def avatar_params
    params.require(:user).permit(:avatar)
  end
end
