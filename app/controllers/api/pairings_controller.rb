class Api::PairingsController < ApplicationController

  def index
    @pairings = Pairing.current(params[:user_id])
    render json:{ pairings:  @pairings }
  end

  def generate
    @pairings = Pairing.generate!
    render json: { pairings: @pairings }
  end

  def show
    @pairing = Pairing.find(params[:id])
    render json: { pairing:  @pairing }
  end

end

