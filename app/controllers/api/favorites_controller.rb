class Api::FavoritesController < ApplicationController

  def index
    render json: Favorite.where(log_id: params[:log_id])
  end

  def create
    fav = Favorite.create(params.require(:favorite).permit(:user_id, :log_id))
    render json: fav
  end

  def destroy
    Favorite.find_by_id(params[:id]).try(:destroy)
    render status: 204, nothing: true
  end
end

