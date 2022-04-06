Rails.application.routes.draw do
  get ':url', to: 'vue_application#index', constraints: { url: /.*/ }, as: :vue_application
end
