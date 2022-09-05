# frozen_string_literal: true

module Ajax
  # dashboard controller
  class DashboardsController < ApplicationController
    def index
      status, data = Ajax::Dashboards::IndexUsecase.new(params.to_unsafe_h).call

      render json: data, status: status
    end

    def show
      status, data = Ajax::Dashboards::ShowUsecase.new(params.to_unsafe_h).call

      render json: data, status: status
    end
  end
end
