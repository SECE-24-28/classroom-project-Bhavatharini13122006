
const exp = require('express')
const app = exp()
const body = require('body-parser')
const exh = require('express-handlebars')

app.engine('hbs',exh.engine(
{   layoutsDir:'viewsfold/',
    defaultLayout:"main",
    extname:"hbs"
}))

app.set('view engine','hbs')
app.set('views', 'viewsfold')

app.use(body.urlencoded({ extended: true }))

let m="Bhavatharini"



// app.get('/',(req,res)=>{
//     res.render('main',{m})
// })


const dbo=require('./db')

app.get('/',async (req, res)=>{
    let db=await dbo.getDataBase()
    const collection=db.collection('books')
    const cursor=collection.find()
    let data= await cursor.toArray()
    switch(req.query.status)
    {
        case 1:
            message="inserted successfully"
            break;
        default:
            break;
    }
    res.render('main', {m,data})
})

app.post('/store_book',async(req,res)=>
{
    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    let bookdata={title:req.body.title, author:req.body.author}
    await collection.insertOne(bookdata)
    return res.redirect('/?status=1')
})

app.listen(3000,()=>{
    console.log("server is running")
})
