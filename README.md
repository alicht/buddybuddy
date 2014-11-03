# BUDDYBUDDY README


## App Layout

- Rails Api


## MAC INSTALL

* Install and run Postgres. We use brew, but use whatever suits your fancy.

`brew install postgresql`

* Clone the repo, cd into it, run bundler, and initialize the database.

```
git clone https://github.com/simplereach/buddybuddy.git
cd buddybuddy
bundle install
rake db:setup
```

* Set up ember-cli. If you have other instances of ember-cli, be sure to unlink them (@amalan can you expand on this?).

```
cd ember
npm install
bower install
```

* Start your Rails server

* From the ember directory, start the ember server. If your rails server is running on a port other than the default, specify that port when starting the ember server.

`ember server --proxy http://localhost:3000`

* Generate pairs
```
rails c
Pairing.generate!
```

* Happy BuddyBuddying!

Please feel free to use a different markup language if you do not plan to run
`rake doc:app`.


## LINUX INSTALL
* System dependencies
```
sudo apt-get install postgresql
sudo apt-get install libpq-dev
sudo apt-get install npm
sudo apt-get install rvm
```

* Ruby version
``
rvm install 1.9.3
``

* Configuration
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

* Database creation
```
sudo su - postgres
psql postgres
```
-- open the psql commandline
CREATE USER bmason;
CREATE DATABASE "buddybuddy-rails_development" ENCODING = 'unicode';
GRANT ALL PRIVILEGES ON DATABASE "buddybuddy-rails_development" to bmason;
-- close psql



## TO DO
* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions


