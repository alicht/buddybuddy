charlie = User.create(name: "Charlie Ridley")
nick = User.create(name: "Nick Blanchet")
heyjin = User.create(name: "Designy Heyjin")
andre = User.create(name: "Andre Malan")
User.create([
  { name: 'user1' },
  { name: 'user2' },
  { name: 'user3' },
  { name: 'user4' },
  { name: 'user5' },
  { name: 'user6' },
  { name: 'user7' },
  ])

pairing = Pairing.create(start_date: DateTime.now - 7.days, end_date: DateTime.now)
pairing.users << charlie
pairing.users << nick
pairing.save