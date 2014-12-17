class Api::LogsController < ApplicationController
  before_filter :authorize!

  def index
    logs = Log.buddfeed(params[:pairing_id])
    render json: logs
  end

  def create
    log = Log.create(params.require(:log).permit!)
    render json: log
  end

  def update
  	log = Log.find(params[:id])
  	log.update_attributes!(params.require(:log).permit!)
  	render json: log
  end

end
