package storage

import (
	"encoding/json"
	"fmt"
	"os"
	"paceplanner/backend/models"
	"path/filepath"
)

const dataDir = "./localdata"

func LoadAllPlans() ([]models.TrainingPlan, error) {
	var plans []models.TrainingPlan
	files, err := os.ReadDir(dataDir)
	if err != nil {
		return nil, err
	}

	for _, file := range files {
		data, err := os.ReadFile(filepath.Join(dataDir, file.Name()))
		if err != nil {
			continue
		}
		var plan models.TrainingPlan
		if err := json.Unmarshal(data, &plan); err == nil {
			plans = append(plans, plan)
		} else {
			fmt.Println("Error unmarshalling plan:", err)
		}
	}

	return plans, nil
}

func SavePlan(plan models.TrainingPlan) error {
	filePath := filepath.Join(dataDir, plan.ID+".json")
	data, err := json.MarshalIndent(plan, "", "  ")
	if err != nil {
		return err
	}
	return os.WriteFile(filePath, data, 0644)
}

func DeletePlan(id string) error {
	return os.Remove(filepath.Join(dataDir, id+".json"))
}
