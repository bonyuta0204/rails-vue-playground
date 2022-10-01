# frozen_string_literal: true

module Ajax
  # operators controller
  class OperatorsController < AuthorizedApiController
    include Authorizable

    def show
      render json: UserBlueprint.render_as_json(current_user), status: status
    end
  end
end
