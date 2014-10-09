

def create(_date)
  charlie = User.create(name: "Charlie Ridley")
  nick = User.create(name: "Nick Blanchet")
  heyjin = User.create(name: "Designy Heyjin")
  andre = User.create(name: "Andre Malan")

  start_date = _date.beginning_of_week
  end_date = _date.end_of_week

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
end



today = DateTime.now
create(today)
create(7.days.ago(today))
create(14.days.ago(today))
create(21.days.ago(today))