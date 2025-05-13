class Users::RegistrationsController < Devise::RegistrationsController
  before_action :authenticate_user!

  # Afficher le formulaire de modification de la photo
  def edit_avatar
    # Pas besoin d'ajouter de logique ici, on utilise la vue
  end

  def update_avatar
    if current_user.update(user_params)
      redirect_to edit_avatar_user_path, notice: "Avatar mis à jour avec succès."
    else
      render :edit_avatar, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:avatar)
  end
end 
