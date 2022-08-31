# frozen_string_literal: true

module MessageLists
  # Messages IndexService
  class IndexService
    def execute
      Messages::LatestMessageService.new(Message.with_includes).execute
    end
  end
end
