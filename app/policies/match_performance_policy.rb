class MatchPerformancePolicy < ApplicationPolicy
  # NOTE: Up to Pundit v2.3.1, the inheritance was declared as
  # `Scope < Scope` rather than `Scope < ApplicationPolicy::Scope`.
  # In most cases the behavior will be identical, but if updating existing
  # code, beware of possible changes to the ancestors:
  # https://gist.github.com/Burgestrand/4b4bc22f31c8a95c425fc0e30d7ef1f5

  class Scope < ApplicationPolicy::Scope
    # NOTE: Be explicit about which records you allow access to!
    def resolve
      if user.entraineur?
      scope.all
      elsif user.joueur?
        scope.where(user: user)
      else
        scope.none  # Si l'utilisateur n'est ni entraineur ni joueur, il n'a accès à aucun enregistrement
      end
    end
  end

  def index?
    user.entraineur?  # L'accès à l'index est uniquement autorisé aux utilisateurs ayant le rôle "entraineur"
  end

  def show?
    # Exemple : autorise uniquement si l'utilisateur est le propriétaire du profil ou un entraineur
    user.entraineur? || record.user == user
  end

  def new?
    create?
  end

  def create?
    user.entraineur? || record.user == user || user.joueur?
  end

  def update?
    user.entraineur? || record.user == user || user.joueur?
  end

  def edit?
    update?
  end

end
