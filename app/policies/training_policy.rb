class TrainingPolicy < ApplicationPolicy
  # NOTE: Up to Pundit v2.3.1, the inheritance was declared as
  # `Scope < Scope` rather than `Scope < ApplicationPolicy::Scope`.
  # In most cases the behavior will be identical, but if updating existing
  # code, beware of possible changes to the ancestors:
  # https://gist.github.com/Burgestrand/4b4bc22f31c8a95c425fc0e30d7ef1f5

  class Scope < Scope
    def resolve
      scope.all  # Pour l’instant, tous les trainings sont visibles
    end
  end

  def index?
    true
  end

  def show?
    true
  end

  def new?
    create?
  end

  def create?
    user.entraineur?
  end

  def update?
    user.entraineur?
  end

  def edit?
    update?
  end

  def destroy?
    user.entraineur?
  end
end
