require 'rails_helper'
require 'pry'


describe Pairing do
  let(:pairing1) { create(:pairing) }
  let(:pairing2) { create(:pairing) }
  let(:user1) { create(:user) }
  let(:user2) { create(:user) }
  let(:user3) { create(:user) }
  let(:user4) { create(:user) }

  it 'has a start date' do
  	expect(pairing1.start_date.present?).to eq(true)
  end

  it 'has an end date' do
  	expect(pairing1.end_date.present?).to eq(true)
  end

  describe '.delete_at()' do
    before do
      Pairing.delete_all
    end

    it 'deletes current pairings' do
      Pairing.new_pairing([user1, user2], Time.now)
      Pairing.delete_at(Time.now)
      expect(Pairing.count).to eq(0)
    end
  end

  describe '.valid_pair' do
    before do
      Pairing.delete_all
    end

    it 'returns false if passed the same user twice' do
      expect(Pairing.valid_pair(user1,user1)).to eq(false)
    end

    it 'returns true if passed two unique users who have not been previously paired' do
      expect(Pairing.valid_pair(user1, user2)).to eq(true)
    end

    it 'returns nil if a user is nil' do
      @nil_user = nil
      expect(Pairing.valid_pair(user1, @nil_user)).to eq(nil)
    end

    it 'returns false if two users have been recently paired' do
      Pairing.new_pairing([user1, user2], Time.now.beginning_of_week - 1.day)
      expect(Pairing.valid_pair(user1, user2, Time.now)).to eq(false)
    end

  end

  describe '.no_past_pairing' do
    before do 
      Pairing.delete_all
      Pairing.new_pairing([user1, user2], Time.now.beginning_of_week - 1.day)
    end

    it 'returns false if two users have been paired recently' do
      result = Pairing.no_past_pairing(user1, user2, Time.now)
      expect(result).to eq(false)
    end

    it 'returns true if two users have not been paired recently' do
      expect(Pairing.no_past_pairing(user3,user4)).to eq(true)
    end
  end

  describe '.past_pairings' do
    before do 
      Pairing.delete_all
      Pairing.new_pairing([user1, user2], Time.now.beginning_of_week - 1.day)
    end

    it 'returns the correct amount of past pairings' do 
      past_pairings = Pairing.past_pairings(user1,user2)
      expect(past_pairings.length).to eq(1)
    end

    it 'does not return an empty array if recently paired' do
      past_pairings = Pairing.past_pairings(user1, user2)
      expect(past_pairings).to_not eq([])
    end
  end

  describe '.new_pairing' do
    before do
      Pairing.delete_all
      @time = Time.now.utc
      @users = [user1,user2,user3,user4]
      @new_pairing = Pairing.new_pairing(@users, @time)
    end

    it 'should have a start date' do
      expect(@new_pairing.start_date.present?).to eq(true)
    end

    it 'should have a start date equal to the beginning of the week of the datetime passed to it' do
      expect(@new_pairing.start_date).to eq(@time.beginning_of_week)
    end

    it 'should have an end date' do
      expect(@new_pairing.end_date.present?).to eq(true)
    end

    it 'should have an end date equal to the end of the week of the datetime passed to it' do
      expect(@new_pairing.end_date).to eq(@time.end_of_week)
    end

    it 'should have users equal to the users array passed to it' do
      expect(@new_pairing.users).to eq(@users)
    end

    it 'returns an instance of Pairing' do
      expect(@new_pairing).to be_an_instance_of(Pairing)
    end
  end

  describe '.start_date' do

    it 'should be the beginning of the week passed to it' do
      expect(Pairing.start_date).to eq(Time.now.utc.beginning_of_week)
    end
  end

  describe '.end_date' do

    it 'should be at the end of the week passed to it' do
      expect(Pairing.end_date).to eq(Time.now.utc.end_of_week)
    end
  end

end
