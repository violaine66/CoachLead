class UserPolicy < ApplicationPolicy
  # NOTE: Up to Pundit v2.3.1, the inheritance was declared as
  # `Scope < Scope` rather than `Scope < ApplicationPolicy::Scope`.
  # In most cases the behavior will be identical, but if updating existing
  # code, beware of possible changes to the ancestors:
  # https://gist.github.com/Burgestrand/4b4bc22f31c8a95c425fc0e30d7ef1f5

  class Scope < ApplicationPolicy::Scope
    # NOTE: Be explicit about which records you allow access to!
    # def resolve
    #   scope.all
    # end
  end

  class UserPolicy < ApplicationPolicy
    # L'entraîneur (admin) peut voir tous les utilisateurs, ou un joueur peut voir son propre profil
    def show?
      user.entraineur? || record == user
    end

    # L'entraîneur (admin) peut modifier tous les utilisateurs, ou un joueur peut modifier son propre profil
    def update?
      user.entraineur?
    end

    # Si tu as d'autres actions (destroy, create, etc.), tu peux les définir ici
  end

end
