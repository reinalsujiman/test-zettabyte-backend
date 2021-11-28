module.exports = app => {
    const article = require("../controller/article.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", article.create);
  
    // Retrieve all Tutorials
    router.get("/", article.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", article.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", article.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", article.delete);
  
    // Create a new Tutorial
    router.delete("/", article.deleteAll);
  
    app.use("/api/article", router);
  };