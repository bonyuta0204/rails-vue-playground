Rails.application.routes.draw do

  get 'auth/index'
  get "sign_in",to: "auth#sign_in"

  namespace :ajax do
    resources :users, only: [:index]

    get "auth/sign_in", to: "auth#sign_in"

    resources :channels do
      resources :messages, only: [:index]
    end
    resources :message_lists,  only: [:index]
    resources :dashboards, only: [:index, :show] do
      resources :widgets, only: [:show]
    end
  end

  namespace :api do
    resources :channels do
      resources :messages, only: [:index]
    end

    resources :message_lists,  only: [:index]
  end


  get ':url', to: 'vue_application#index', constraints: { url: /.*/ }, as: :vue_application
end
