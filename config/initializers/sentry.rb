Sentry.init do |config|
  config.dsn = 'https://59cc80263f9743cb8b99054b2ecf5ec9@o1209044.ingest.sentry.io/6342400'
  config.breadcrumbs_logger = %i[active_support_logger http_logger]

  # Set tracesSampleRate to 1.0 to capture 100%
  # of transactions for performance monitoring.
  # We recommend adjusting this value in production
  config.traces_sample_rate = 1.0
  # or
  config.traces_sampler = lambda do |_context|
    true
  end
end
