const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categorys = require('./data/category.json')
app.get('/', (req, res)=>{
    res.send('news api running!!')
})

app.get('/news-category', (req, res)=>{
    res.send(categorys)
})



app.listen(port, ()=>{
    console.log('news api port', port)
})