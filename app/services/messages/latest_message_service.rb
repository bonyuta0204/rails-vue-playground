module Messages
  class LatestMessageService
    # @param message_relation[Message::ActiveRecordRelation]
    def initialize(message_relation)
      @message_relation = message_relation
    end

    def execute
      latest_message_ids = Rails.cache.read(cache_key)

      if latest_message_ids.present?
        message_relation.where(id: latest_message_ids)
      else
        Rails.cache.write(cache_key, Message.latest_messages.ids)
        message_relation.latest_messages
      end
    end

    def last_updated_at
      @last_updated_at ||= Message.pick('MAX(updated_at)')
    end

    def cache_key
      "latest_message_ids:#{last_updated_at}"
    end

    private

    attr_reader :message_relation
  end
end
