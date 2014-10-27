task :pair => :environment do
  desc "create new buddy pairings"
  Pairing.generate!()
end

