
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

Pairing.generate!

# pairing = Pairing.create(start_date: DateTime.now - 7.days, end_date: DateTime.now)
# pairing.users << charlie
# pairing.users << nick
# pairing.save
# =======


# def create(_date)
#   charlie = User.create(name: "Charlie Ridley")
#   nick = User.create(name: "Nick Blanchet")
#   heyjin = User.create(name: "Designy Heyjin")
#   andre = User.create(name: "Andre Malan")

#   start_date = _date.beginning_of_week
#   end_date = _date.end_of_week

#   pairing = Pairing.create(start_date: start_date, end_date: end_date)

#   (start_date..end_date).each do |d|
#     log = Log.create(created_at: d)
#     log.pairing = pairing
#     log.user = charlie
#     log.save
#   end

#   pairing.users << charlie
#   pairing.users << nick
#   pairing.logs
#   pairing.save
# end



# today = DateTime.now
# create(today)
# create(7.days.ago(today))
# create(14.days.ago(today))
# create(21.days.ago(today))
