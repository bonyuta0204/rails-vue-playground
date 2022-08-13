# frozen_string_literal: true

module Messages
  # Messages IndexService
  class IndexService
    def initialize(channel_id)
      @channel_id = channel_id
    end

    def execute
      channel&.messages
    end

    private

    attr_reader :channel_id

    def channel
      @channel ||= Channel.find(channel_id)
    end
  end
end
