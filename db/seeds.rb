
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
  "Charlie 2",
  "Adam",
  "Alan",
  "Dave",
  "Kent",
  "Alvin",
  "Chris"
  ].each do |email|
    User.find_or_create_by(name: email.split('@').first)
  end
Pairing.delete_all
Log.delete_all
Pairing.generate!
