package main

import (
	"embed"
	"paceplanner/backend/app"
	"paceplanner/backend/controllers"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {

	app := app.NewApp()

	err := wails.Run(&options.App{
		Title:  "Pace Planner",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 0, G: 0, B: 0, A: 0},
		OnStartup:        app.Startup,
		OnShutdown:       app.Shutdown,
		Bind: []interface{}{
			app,
			controllers.NewTrainingPlanController(),
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
