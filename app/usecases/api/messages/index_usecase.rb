# frozen_string_literal: true

module Api
  module Messages
    # Messages Index usecase
    class IndexUsecase
      def initialize(params)
        @channel_id = params[:channel_id]
      end

      def call
        [:ok, channel&.messages]
      end

      private

      attr_reader :channel_id

      def channel
        @channel ||= Channel.find(channel_id)
      end
    end
  end
end
