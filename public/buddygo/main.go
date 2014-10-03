package main

import (
	"encoding/json"
	"flag"
	"log"
	"net/http"
)

var docroot = flag.String("docroot", "./public ", "document root to serve files from")

func main() {
	flag.Parse()
	log.Println("now listening on localhost:8080")
	http.Handle("/", http.FileServer(http.Dir(*docroot)))
	http.HandleFunc("/users/", HandleUsers)
	log.Fatal(http.ListenAndServe(":8080", nil))
}

type User struct {
	Id   int    `json:"id"`
	Name string `jsn:"string"`
}

func HandleUsers(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode([]User{
		{Id: 1, Name: "Charlie"},
		{Id: 2, Name: "Brian"},
	})
}
