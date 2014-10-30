class Api::UsersController < ApplicationController
  before_filter :authorize!

  def index
    # restrict on pairing id.
    @users = User.all
    @users = @users.select{|user| user.pairing_ids.include?(params[:pairing_id].to_i)} if params[:pairing_id]
    render json: @users
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    if @user = current_user
      if params[:user][:current_password]
        if @user.update_with_password(user_params)
        sign_in @user
        render json: @user
        else
          render json: { error: 'Passwords incorrect' }, status: :not_acceptable
        end
      else
        @user.update_attribute(:name, params[:user][:name])
        render json: @user
      end
    end
  end

  def user_params
    params.require(:user).permit(:name, :current_password, :password, :password_confirmation)
  end
end
