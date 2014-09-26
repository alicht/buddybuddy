package app

import (
	"time"
)

type User struct {
	Id   string `json:"id"`
	Name string `json:"name"`
}
type Pairing struct {
	Id            string    `json:"id"`
	PrimaryUser   *User     `json:"-"`
	SecondaryUser *User     `json:"secondaryUser"`
	StartDate     time.Time `json:"startDate"`
	EndDate       time.Time `json:"endDate"`
	Logs          []Log     `json:"-"`
}

type Log struct {
	Id      string    `json:"id"`
	Message string    `json:"string"`
	Date    time.Time `json:"date"`
	User    *User     `json:"-"`
	Pairing *Pairing  `json:"-"`
}
