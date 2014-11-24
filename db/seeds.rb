 Pairing.delete_all
 Log.delete_all
 User.delete_all

[
  "Kent",
  "Alexis",
  "Eric",
  "Dan",
  "Eddie",
  "Pnts",
  "Andre",
  "Claire",
  "Blanchet",
  "Jenn",
  "Roy",
  "Amit",
  "HeyHeyJin",
  "Wael",
  "Dana",
  "Evan",
  "Shane",
  "Russ",
  "Rachel",
  "Brian",
  "Stetson",
  "Zareen",
  "Adam",
  "Alan",
  "Dave",
  "Kent",
  "Alvin",
  "Chris",
  "Victoria",
  "Rose",
  "Elson",
  ].each do |email|
    User.create(name: email.split('@').first, email: "#{email.downcase.split(" ")[0]}@simplereach.com", password: "changeme")
  end


 Pairing.generate!
