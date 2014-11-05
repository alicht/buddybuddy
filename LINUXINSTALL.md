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
    ```
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
```

4. Database creation
    ```
sudo su - postgres
psql postgres
```
    ```
-- open the psql commandline
CREATE USER <username>;
CREATE DATABASE "buddybuddy-rails_development" ENCODING = 'unicode';
GRANT ALL PRIVILEGES ON DATABASE "buddybuddy-rails_development" to <username>;
-- close psql
```
