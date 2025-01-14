package storage

import (
	"encoding/json"
	"fmt"
	"os"
	"paceplanner/backend/models"
	"path/filepath"
	"runtime"

	"github.com/joho/godotenv"
)

var dataDir string

func getAppDataPath() string {
	switch runtime.GOOS {
	case "windows":
		return os.Getenv("APPDATA") // Use LOCALAPPDATA if needed
	case "darwin": // macOS
		home, _ := os.UserHomeDir()
		return home + "/Library/Application Support"
	case "linux":
		home, _ := os.UserHomeDir()
		return home + "/.config"
	default:
		return ""
	}
}

func init() {
	if err := godotenv.Load(); err != nil {
		fmt.Println("No .env file found, using defaults")
	}

	// Get environment or fallback to default
	if env := os.Getenv("ENV"); env == "development" {
		dataDir = "./localdata"
	} else if env == "production" {
		dataDir = getAppDataPath() + "/paceplanner"
	} else {
		panic("Environment variable ENV not correct")
	}

	// Ensure directory exists
	if err := os.MkdirAll(dataDir, 0755); err != nil {
		panic(fmt.Sprintf("Failed to create data directory: %v", err))
	}

	fmt.Printf("Using data directory: %s\n", dataDir)
}

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
