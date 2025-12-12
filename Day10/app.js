
const exp = require('express')
const app = exp()
const body = require('body-parser')
const exh = require('express-handlebars')
const mongodb = require('mongodb');


// app.engine('hbs',exh.engine(
// {   layoutsDir:'viewsfold/',
//     defaultLayout:"main",
//     extname:"hbs"
// }))

app.engine('hbs',exh.engine(
{   layoutsDir:'viewsfold/',
     defaultLayout:false,
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
    let message = '';
    switch(req.query.status)
    {
        case '1':
            message="inserted successfully"
            break;
        default:
            break;
    }
    res.render('main', {m,message,data})
})

app.post('/store_book',async(req,res)=>
{
    
    let database=await dbo.getDataBase()
    const collection=database.collection('books')
    let bookdata={title:req.body.title, author:req.body.author}
    await collection.insertOne(bookdata)
    return res.redirect('/?status=1')
})

app.get('/delete/:id',async(req, res)=>{
    let db=await dbo.getDataBase()
    const collection=db.collection('books')
    await collection.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    return res.redirect('/')
})


app.get('/update/:id',async(req, res)=>{
    let db=await dbo.getDataBase()
    const collection=db.collection('books')
    const{ObjectId}=require('mongodb')
    let data=await collection.findOne({_id:new ObjectId(req.params.id)})
    res.render('update', {data})
})
  
app.post('/update/:id', async (req, res) => {
    let db = await dbo.getDataBase();
    const collection = db.collection('books');
    const { ObjectId } = require('mongodb');

    await collection.updateOne(
        { _id: new ObjectId(req.params.id) },   
        { $set: { title: req.body.title, author: req.body.author } } 
    );

    res.redirect('/?status=2');  
});

app.listen(3000,()=>{
    console.log("server is running")
})
