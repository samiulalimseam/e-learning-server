const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');
app.use(cors())



const categories = require('./data/categories.json');

app.get ('/', (req,res)=>{
    res.send('Educare API Running!');
});
app.get ('/categories', (req,res)=>{
    res.send(categories);

});

app.get('/category/:id', (req,res)=>{
    const id = req.params.id;
    const filteredCategory = categories.find(category => category.id == id);
    res.send(filteredCategory);
    console.log(filteredCategory)

})
app.get('/course/:id', (req,res)=>{
    const id = req.params.id;
    const arr = [];
    const topic = categories.map(course=>course.course)
    const courses =   topic.map(t=> t.map(c=> arr.push(c)))
   const fixedData = arr.filter(c=> c.id == id)

    res.send(fixedData);
    console.log(fixedData)

})
app.listen(port, () =>{
    console.log('Educare Server Running on port ', port); 
})
