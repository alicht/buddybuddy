class Api::LogsController < ApplicationController

  def index
    #pairing_id
    @logs = Log.all
    @logs.select!{|log| log.pairing_ids.include?(params[:pairing_id].to_i)} if params[:pairing_id]
    render json: @logs
  end

end