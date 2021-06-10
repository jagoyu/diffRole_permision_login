package main

import (
	"github.com/gin-gonic/gin"
)

func main()  {
	app := gin.Default()
	app.POST("/login",func (c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "POST",
		})
	})
}