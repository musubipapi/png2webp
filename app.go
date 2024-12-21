package main

import (
	"context"
	"fmt"
	"os"

	"github.com/wailsapp/wails/v2/pkg/runtime"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

type Person struct {
	Name    string   `json:"name"`
	Age     uint8    `json:"age"`
	Address *Address `json:"address"`
}
type Address struct {
	Street   string `json:"street"`
	Postcode string `json:"postcode"`
}

// Greet returns a greeting for the given name
func (a *App) Greet(p Person) string {
	return fmt.Sprintf("Hello %s (Age: %d)!", p.Name, p.Age)
}

func (a *App) ReadFile(path string) (string, error) {
	content, err := os.ReadFile(path)
	if err != nil {
		return "", err
	}
	return string(content), nil
}

func (a *App) SelectFile() (string, error) {
	return runtime.OpenFileDialog(a.ctx, runtime.OpenDialogOptions{
		Title: "Select a file",
		Filters: []runtime.FileFilter{
			{
				DisplayName: "Images (*.png;*.jpg)",
				Pattern:     "*.png;*.jpg",
			},
		},
	})
}
