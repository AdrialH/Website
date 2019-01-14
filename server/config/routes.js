const items = require("./../controllers/items");
var path = require("path");

module.exports = (app)=>{
    app.get("/items", items.index),
    app.post("/items", items.create),
    app.get("/items/:id", items.show),
    app.put("/items/:id", items.update),
    app.delete("/items/:id", items.delete),
    app.post("/comment", items.comment),
    app.get("/comment", items.comments),
    app.delete("/comment/:id", items.remove),
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
      })
};