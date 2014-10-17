class BuddybuddyController < ApplicationController
  http_basic_authenticate_with name: "simplereach", password: "buddybuddy", only: [:index]

  def index

    params[:path] = nil if params[:path].nil? || File.extname(params[:path]).empty? #always send index if asking for html
    template = File.join(Rails.public_path , 'dist', params[:path] || 'index.html')

    respond_to do |format|
      format.js    { render file: template, layout: false }#, content_type: content_type }
      format.html  { render file: template, layout: false }
      format.json  { render json: { health: true, error: 'If you are expecting data please ensure your api route is correct.' } }
    end
  end

end