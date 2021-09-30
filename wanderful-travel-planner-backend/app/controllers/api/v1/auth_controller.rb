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
