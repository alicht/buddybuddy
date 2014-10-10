class BuddybuddyController < ApplicationController
  http_basic_authenticate_with name: "simplereach", password: "buddybuddy", only: [:index]

  def index

    params[:path] = nil if params[:path].nil? || File.extname(params[:path]).empty? #always send index if asking for html
    template = File.join(Rails.public_path , 'dist', params[:path] || 'index.html')
    puts "-----------------------"
    puts template
    puts "-----------------------"
    extname = File.extname(template)[1..-1]
    mime_type = Mime::Type.lookup_by_extension(extname)
    content_type = mime_type.to_s unless mime_type.nil?
    headers["Content-Type"] = content_type

    respond_to do |format|
      format.js {
        puts 'rendering js'
        render file: template, layout: false, content_type: content_type
      }
      format.html  {
        puts 'rendering html'
        render file: template, layout: false
      }
      format.json  {
        puts 'rendering json'
        render json: { health: true, error: 'If you are expecting data please ensure your api route is correct.' }
      }
      format.tff {
        render file: template, layout: false
      }
    end
  end

end