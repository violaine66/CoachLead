class PlayerProfilPolicy < ApplicationPolicy
  # NOTE: Up to Pundit v2.3.1, the inheritance was declared as
  # `Scope < Scope` rather than `Scope < ApplicationPolicy::Scope`.
  # In most cases the behavior will be identical, but if updating existing
  # code, beware of possible changes to the ancestors:
  # https://gist.github.com/Burgestrand/4b4bc22f31c8a95c425fc0e30d7ef1f5
  class Scope < Scope
    def resolve
      # Récupère tous les profils de joueurs, ou filtre les profils selon l'utilisateur
      if user.entraineur?
        # Si l'utilisateur est un entraineur, il peut accéder à tous les profils de joueurs
        scope.all
      else
        # Si l'utilisateur n'est pas un entraineur, retourne uniquement les profils associés à cet utilisateur
        scope.where(user: user)
      end
    end
  end

  def index?
    user.entraineur?  # L'accès à l'index est uniquement autorisé aux utilisateurs ayant le rôle "entraineur"
  end

  # Définir d'autres actions si nécessaire, par exemple show, create, etc.
  def show?
    # Exemple : autorise uniquement si l'utilisateur est le propriétaire du profil ou un entraineur
    user.entraineur? || record.user == user
  end
end
