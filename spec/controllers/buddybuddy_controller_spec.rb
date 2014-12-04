require 'rails_helper'

describe BuddybuddyController do

	before do
		request.env['HTTP_REFERER'] = '/'
	end

  describe 'GET #index' do
    it 'returns 200' do
      get :index
      expect(response.status).to eq(200)
    end
  end

end


