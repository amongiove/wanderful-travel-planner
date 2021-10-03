class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]
  wrap_parameters :user, include: [:name, :email, :password]

  # GET /users
  def index
    users = User.all
    users_json = UserSerializer.new(users).serialized_json
    render json: users_json
  end

  # GET /users/1
  def show
    render json: UserSerializer.new(@user).serialized_json
  end

  # POST /users
  def create
    puts "CREATE METHOD"
    @user = User.new(user_params)

    if @user.save
      session[:user_id] = @user.id
      render json: UserSerializer.new(@user), status: :created    
    else
      render json: @user.errors.full_messages.to_sentence, status: :unprocessable_entity
    end
  end

  # # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email, :password)
    end
end
