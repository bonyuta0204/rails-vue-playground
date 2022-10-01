# frozen_string_literal: true

module Ajax
  # Widgets controller
  class WidgetsController < AuthorizedApiController
    def show
      status, data = Ajax::Widgets::ShowUsecase.new(params.to_unsafe_h).call

      render json: data, status: status
    end
  end
end
