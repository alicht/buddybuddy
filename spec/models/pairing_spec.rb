require 'rails_helper'

describe Pairing do
  # let(:user1) { FactoryGirl.build(:user) }
  # let(:user2) { FactoryGirl.build(:user) }
  # let(:user3) { FactoryGirl.build(:user) }
  # let(:user4) { FactoryGirl.build(:user) }
  let(:pairing1) { FactoryGirl.build(:pairing)}
  let(:pairing2) { FactoryGirl.build(:pairing)}

	# describe '.generate!()' do 

	# 	it 'generates a pairing' do

	# 	end

 #  end

  it 'has a start date' do
  	expect(pairing1.start_date.present?).to eq(true)
  end

  it 'has an end date' do
  	expect(pairing1.end_date.present?).to eq(true)
  end

end
