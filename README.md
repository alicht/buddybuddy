![Alt text](/ember/app/styles/images/logo.png?raw=true "Buddy Buddy Logo")


# BUDDYBUDDY README
Buddy Buddy is a simple pairing and check-in system for any type of organization or group. At SimpleReach, we use Buddy Buddy to keep cross-departmental communication open and facilitate comaraderie across the entire organization. Each week we generate a new list of pairings (if there is an odd number in your group don't worry - we'll generate a threesome). Each pair meets at least twice a week for a minimum of 10 minutes to chat. Once they've met up, they check-in on Buddy Buddy to track the event happened and record any notes they'd like to remember about the meeting.

## Requirements
1. rails
2. ember-cli
3. postgresql
4. beers :beers:

## Getting started
1. Clone the repository using Git:
`clone https://github.com/simplereach/buddybuddy.git`

2. Install ruby gem dependencies
```
cd buddybuddy
bundle install
```

3. DB set up
`rake db:setup`

4. Set up ember-cli. If you have other instances of ember-cli, be sure to unlink them (@amalan can you expand on this?).
```
cd ember
npm install
bower install
```

4. Start Rails server
`rails s`

5. Start Ember server. If your rails server is running on a port other than the default, specify that port when starting the ember server.
```
cd ember
ember server --proxy http://localhost:3000'
```

6. Generate pairs in Rails console
```
rails c
Pairing.generate!
```

7. Happy BuddyBuddying!

Please feel free to use a different markup language if you do not plan to run
`rake doc:app`.

Note: if you use Linux, read [`LINUXINSTALL.md`](LINUXINSTALL.md) to get started.


# Heroku deploy
```
heroku create # if you are deploying a fresh instance.

# add and commit files to your git environment. *git add, git push etc*

rake build  # builds ember application
rake deploy # properly commits and deploys to heroku

heroku run rake db:setup # if this is your first deploy.
heroku run rake db:migrate # run migrations if any.

heroku open # to open the site on the browser.
```
