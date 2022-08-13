# frozen_string_literal: true

namespace :ridgepole do
  task arguments: :environment do |_cmd, args|
    @args = args
  end

  task ridgepole_client: :environment do
    config = Rails.application.config.database_configuration[Rails.env]
    @ridgepole_client = Ridgepole::Client.new(config, dump_with_default_fk_name: true)
  end

  desc 'ridgepole --export を実行します。 [出力ファイル]'
  task :export, [:path] => %i[environment arguments ridgepole_client] do
    path = @args.path || Rails.root.join('db/Schemafile')

    File.binwrite path, "#{@ridgepole_client.dump}\n"
  end

  desc 'ridgepole --apply を実行します。 [Schemafileパス]'
  task :apply, [:path] => %i[environment arguments ridgepole_client] do
    path = @args.path || Rails.root.join('db/Schemafile')
    schema = File.read(path)

    delta = @ridgepole_client.diff(schema, path: path.to_s)

    differ, = delta.migrate

    puts 'No change' unless differ
  end
end
