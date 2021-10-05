class Api::V1::AuthController < ApplicationController
    skip_before_action :authorized, only: [:login]

    def login
      @user = User.find_by(email: params[:auth][:email])
      if @user && @user.authenticate(params[:auth][:password])
        token = encode_token({ user_id: @user.id })
        render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
      else
        render json: { message: "Incorrect username and/or password." }, status: :unauthorized
      end
    end

    def get_current_user
      if logged_in?
          render json: UserSerializer.new(current_user)
      else
          render json: {
              error: "No one logged in"
          }
      end
    end
end
