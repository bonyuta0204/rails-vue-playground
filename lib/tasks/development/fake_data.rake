namespace :development do
  namespace :fake_data do
    desc 'メッセージをランダムに作成します'
    task messages: :environment do
      channels = Channel.all.to_a
      users = User.all.to_a
      1000.times do
        FactoryBot.create(:random_message, sender: users.sample, channel: channels.sample)
      end
    end
  end
end
