FactoryBot.define do
  factory :user do
    name { 'testuser1' }
    avatar_url { 'https://example.com' }
  end

  factory :random_user, class: 'User' do
    name { Faker::Name.name }
    avatar_url { "https://robohash.org/#{Faker::Alphanumeric.alpha(number: 10)}" }
  end
end
