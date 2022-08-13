# frozen_string_literal: true

module Api
  module Messages
    # Messages Index usecase
    class IndexUsecase
      def initialize(params)
        @channel_id = params[:channel_id]
      end

      def call
        messages = ::Messages::IndexService.new(@channel_id).execute
        [:ok, messages]
      end
    end
  end
end
