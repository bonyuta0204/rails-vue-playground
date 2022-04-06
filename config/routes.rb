Rails.application.routes.draw do


  namespace :ajax do
    resources :users, only: [:index]
  end


  get ':url', to: 'vue_application#index', constraints: { url: /.*/ }, as: :vue_application
end
