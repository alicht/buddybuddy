package main

import (
	"encoding/json"
	"flag"
	"log"
	"net/http"

	"fmt"
	"github.com/BurntSushi/toml"
	"github.com/simplereach/buddybuddy/buddygo/app"
	"github.com/simplereach/mgo"
	"github.com/simplereach/mgo/bson"
)

type Mongo struct {
	Host       string
	DB         string
	Collection string
	Domain     string
	Session    *mgo.Session
}
type Config struct {
	Docroot string
	Mongo   Mongo
}

var conf = flag.String("conf", "buddy.toml", "configuration file")
var dumpconfig = flag.Bool("dump-config", false, "dump conf and exit")

func main() {
	flag.Parse()
	var c Config
	if _, err := toml.DecodeFile(*conf, &c); err != nil {
		panic(err)
	}
	if *dumpconfig {
		data, err := json.MarshalIndent(&c, "", "\t")
		if err != nil {
			log.Fatal(err)
		}
		log.Fatal(string(data))

	}
	app, err := NewApp(&c)
	if err != nil {
		panic(err)
	}
	log.Println("now listening on localhost:8080")
	http.Handle("/", http.FileServer(http.Dir(c.Docroot)))
	http.HandleFunc("/users/", app.List)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
func NewApp(c *Config) (*App, error) {
	a := &App{
		Mongo: c.Mongo,
	}
	var err error
	a.Mongo.Session, err = mgo.Dial(c.Mongo.Host)
	if err != nil {
		return nil, err
	}
	return a, nil
}

type App struct {
	Mongo     Mongo
	userquery interface{}
}

func S(i interface{}) string {
	value, ok := i.(string)
	if !ok {
		return ""
	}
	return value

}
func (a *App) List(w http.ResponseWriter, r *http.Request) {
	q := bson.M{"email": bson.M{"$regex": "@" + a.Mongo.Domain + "$"}}
	iter := a.Mongo.Session.DB(a.Mongo.DB).C(a.Mongo.Collection).Find(q).Iter()
	var users struct {
		Users []app.User `json:"users"`
	}
	u := make(map[string]interface{})
	for iter.Next(u) {
		users.Users = append(users.Users, app.User{
			Id:   u["_id"].(bson.ObjectId).Hex(),
			Name: S(u["first_name"]) + " " + S(u["last_name"]),
		})
	}
	log.Println(len(users.Users))
	if err := json.NewEncoder(w).Encode(users); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, "Error: %s", err)
		return
	}
}
