
[
  "kentkrekorian@gmail.com",
  "alexis@simplereach.com",
  "elubow@simplereach.com",
  "dcroft@simplereach.com",
  "steven@simplereach.com",
  "eddie@simplereach.com",
  "andrea@simplereach.com",
  "amalan@simplereach.com",
  "demo@simplereach.com",
  "claire@simplereach.com",
  "nblanchet@simplereach.com",
  "jenn@simplereach.com",
  "roy@simplereach.com",
  "amit@simplereach.com",
  "heyjin@simplereach.com",
  "wemara@simplereach.com",
  "dana@simplereach.com",
  "evan@simplereach.com",
  "sjiang@simplereach.com",
  "rbradberry@simplereach.com",
  "rachel@simplereach.com",
  "bmason@simplereach.com",
  "stetson@simplereach.com",
  "zwilhelm@simplereach.com",
  "cridley@simplereach.com",
  "shansen@simplereach.com",
  "adam@simplereach.com",
  "aanders@simplereach.com",
  "dave@simplereach.com",
  "kent@simplereach.com",
  "alvin@simplereach.com",
  "csira@simplereach.com"
  ].each do |email|
    User.create(name: email)
  end

Pairing.generate!
