# frozen_string_literal: true

module MessageLists
  # Messages IndexService
  class IndexService
    def execute
      Message.latest_messages.with_includes
    end
  end
end
