FactoryGirl.define do

	sequence :email do |n|
		"person#{n}@somewhere.com"
	end

	sequence :name do |n|
    "name#{n}"
  end

  sequence :id do |n|
  	"#{n}"
  end

	factory :user do
		name {generate(:name)}
		email {generate(:email)}
		id {generate(:id)}
		password 'password-length'
		password_confirmation 'password-length'
	end

	factory :pairing do
		start_date { Time.now.getutc }
		end_date { Time.now.getutc + 7.day }
	end
end