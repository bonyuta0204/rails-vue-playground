# frozen_string_literal: true

FactoryBot.define do
  factory :message do
    name { 'message' }
    sender
    channel
  end

  factory :random_message, class: 'Message' do
    content { Faker::Quotes::Shakespeare.romeo_and_juliet_quote }
  end
end
