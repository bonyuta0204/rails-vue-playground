FactoryBot.define do
  factory :channel do
    name { 'testchannel1' }
  end

  factory :random_channel, class: 'Channel' do
    name { Faker::Hobby.activity }
  end
end
