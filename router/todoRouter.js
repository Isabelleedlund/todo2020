const express       = require("express");
const todoItem      = require("../model/todo");
if (process.env.NODE_ENV !== 'production') require('dotenv').config({ path: "./.env" });
const router        = express.Router();

router.get("/todo", async (req, res) => {
    console.log(req.query)
    const currentPage = req.query.page || 1;
    const items = 3;
    
    const sortByDate = req.query.sort;
    const sortByLetter = req.query.sort;

    const allTodos = await todoItem.find()
    const threeTodos = await todoItem
        .find()
        .skip((currentPage - 1) * items)
        .limit(items)
        .sort({date: sortByDate, text: sortByLetter });
    const pagesCount = Math.ceil(allTodos.length / items);

    res.render("todo", {threeTodos, pagesCount, currentPage})
});

router.post("/createtodo", async(req, res) => {
   await new todoItem({
        text:req.body.text
    }).save()
    res.redirect("/todo") // redirect till annan sida. 
});

router.get("/delete/:id", async (req, res) => {
   
    await todoItem.deleteOne({_id:req.params.id})

    res.redirect("/todo") // redirect till annan sida. 
});

router.get("/update/:id", async (req, res) => {
    const response = await todoItem.findById({_id:req.params.id})
    console.log(response);
    res.render("edit", {response}) // skickar datan till todo.ejs
});

router.post("/update/:id", async(req, res) => {
    await todoItem.updateOne({_id:req.body._id},
        {$set: {text: req.body.text}
    });
        // {runValidators: true}

        res.redirect("/todo") // redirect till annan sida. 
});

router.get("/about", async (req, res) => {
    res.render("about")
});

module.exports = router;