package controllers

import (
	"fmt"
	"paceplanner/backend/models"
	"paceplanner/backend/storage"

	"github.com/google/uuid"
)

type TrainingPlanController struct {
}

func NewTrainingPlanController() *TrainingPlanController {
	return &TrainingPlanController{}
}

func (t *TrainingPlanController) GetAllPlans() ([]models.TrainingPlan, error) {
	fmt.Println("Getting all plans")
	return storage.LoadAllPlans()
}

func (t *TrainingPlanController) CreateNewPlan() (models.TrainingPlan, error) {
	uuid := uuid.New().String()
	fmt.Println("Creating new plan with ID:", uuid)

	plan := models.TrainingPlan{
		ID:        uuid,
		Name:      "New Plan",
		Weeks:     3,
		StartDate: "2025-01-01",
	}
	err := storage.SavePlan(plan)
	return plan, err
}

func (t *TrainingPlanController) SavePlan(plan models.TrainingPlan) error {
	return storage.SavePlan(plan)
}

func (t *TrainingPlanController) DeletePlan(id string) error {
	fmt.Println("Deleting plan with ID:", id)
	return storage.DeletePlan(id)
}
