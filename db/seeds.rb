charlie = User.create(name: "Charlie Ridley")
nick = User.create(name: "Nick Blanchet")
heyjin = User.create(name: "Designy Heyjin")
andre = User.create(name: "Andre Malan")

start_date = DateTime.now.beginning_of_week
end_date = DateTime.now.end_of_week

pairing = Pairing.create(start_date: start_date, end_date: end_date)

(start_date..end_date).each do |d|
  log = Log.create(created_at: d)
  log.pairing = pairing
  log.user = charlie
  log.save
end

pairing.users << charlie
pairing.users << nick
pairing.logs 
pairing.save
