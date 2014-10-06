charlie = User.create(name: "Charlie Ridley")
nick = User.create(name: "Nick Blanchet")
heyjin = User.create(name: "Designy Heyjin")
andre = User.create(name: "Andre Malan")

pairing = Pairing.create(start_date: DateTime.now - 7.days, end_date: DateTime.now)
pairing.users << charlie
pairing.users << nick
pairing.save