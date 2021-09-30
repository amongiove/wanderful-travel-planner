class Api::V1::AuthController < ApplicationController
    
    def login
        @user = User.find_by(email: params[:auth][:email])

        if @user && @user.authenticate(params[:auth][:password])
            session[:user_id] = @user.id
            render json: UserSerializer.new(@user), status: :ok
        else
            render json: {
             error: "Invalid Credentials"
            }
        end
    end

end
