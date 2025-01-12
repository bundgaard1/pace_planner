package models

type TrainingPlan struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	StartDate   string `json:"start_date"`
	Weeks       int    `json:"weeks"`
	Runs        []Run  `json:"runs"`
}

type Run struct {
	ID        string `json:"id"`
	Title     string `json:"title"`
	Distance  int    `json:"distance"`
	RunType   string `json:"run_type"`
	Week      int    `json:"week"`
	Day       int    `json:"day"`
	Notes     string `json:"notes"`
	Completed bool   `json:"completed"`
}
