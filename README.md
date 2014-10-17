== README

This README would normally document whatever steps are necessary to get the
application up and running.


== LINUX INSTALL
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
cd ./public
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


* Database initialization
rake db:setup

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions


* ...
ember server --proxy http://localhost:300

Please feel free to use a different markup language if you do not plan to run
<tt>rake doc:app</tt>.

