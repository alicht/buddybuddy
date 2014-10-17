class Api::PairingsController < ApplicationController

  def index
    date = Time.parse(params[:date])
    date = Time.now if params[:current] == 'true'
    Pairing.generate!(date) if params[:generate] == 'true'
    @pairings = date ? Pairing.at(date) : Pairing.all
    @pairings.to_a.select!{|p| p.user_ids.include?(params[:user_id].to_i) } if params[:user_id]
    render json: @pairings
  end

  def generate
    @pairings = Pairing.generate!
    render json:  @pairings
  end

  def show
    @pairing = Pairing.find(params[:id])
    render json: @pairing
  end

end

