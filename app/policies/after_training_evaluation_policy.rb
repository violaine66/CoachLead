class AfterTrainingEvaluationPolicy < ApplicationPolicy
  # NOTE: Up to Pundit v2.3.1, the inheritance was declared as
  # `Scope < Scope` rather than `Scope < ApplicationPolicy::Scope`.
  # In most cases the behavior will be identical, but if updating existing
  # code, beware of possible changes to the ancestors:
  # https://gist.github.com/Burgestrand/4b4bc22f31c8a95c425fc0e30d7ef1f5

  class Scope < ApplicationPolicy::Scope
    # NOTE: Be explicit about which records you allow access to!
    def resolve
      if
      scope.all
      elsif user.joueur?
        scope.where(user: user)
      else
        scope.none
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
    true
  end

  def create?
    true
  end
end
