require "#{Rails.root}/lib/pair_creator"

task :pair => :environment do
  desc "create new buddy pairings"
  PairCreator.new.generate!
end

