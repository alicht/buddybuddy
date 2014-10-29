![Alt text](/ember/app/styles/images/logo.png?raw=true "Buddy Buddy Logo")

# BUDDYBUDDY README
Buddy Buddy is a simple pairing and check-in system for any type of organization or group. At SimpleReach, we use Buddy Buddy to keep cross-departmental communication open and facilitate comaraderie across the entire organization. Each week we generate a new list of pairings (if there is an odd number in your group don't worry - we'll generate a threesome). Each pair meets at least twice a week for a minimum of 10 minutes to chat. Once they've met up, they check-in on Buddy Buddy to track the event happened and record any notes they'd like to remember about the meeting.

## Set up
### MAC INSTALL

1. Install and run Postgres. We use brew - `brew install postgresql` - but use whatever suits your fancy.

2. Clone the repo, cd into it, run bundler, and initialize the database. 
    ```
git clone https://github.com/simplereach/buddybuddy.git
cd buddybuddy
bundle install
rake db:setup
```

3. Set up ember-cli. If you have other instances of ember-cli, be sure to unlink them (@amalan can you expand on this?).
    ```
cd ember
npm install
bower install
```

4. Start your Rails server

5. From the ember directory, start the ember server: `ember server --proxy http://localhost:3000`. If your rails server is running on a port other than the default, specify that port when starting the ember server.

6. Generate pairs in Rails console
    ```
rails c
Pairing.generate!
```

7. Happy BuddyBuddying!

Please feel free to use a different markup language if you do not plan to run
`rake doc:app`.


### LINUX INSTALL
1. System dependencies
    ```
sudo apt-get install postgresql
sudo apt-get install libpq-dev
sudo apt-get install npm
sudo apt-get install rvm
```

2. Ruby version
    ``
rvm install 1.9.3
``

3. Configuration
    ``
git clone https://github.com/simplereach/buddybuddy.git
cd buddybuddy
cd ./ember
npm install -g ember-cli
npm install -g bower
npm install -g phantomjs
npm install
bower install
cd ..
bundle install
``

4. Database creation
    ```
sudo su - postgres
psql postgres
```
```
-- open the psql commandline
CREATE USER bmason;
CREATE DATABASE "buddybuddy-rails_development" ENCODING = 'unicode';
GRANT ALL PRIVILEGES ON DATABASE "buddybuddy-rails_development" to bmason;
-- close psql
```



## TO DO
* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions


