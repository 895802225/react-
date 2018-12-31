const express = require('express')
const mongoose = require('mongoose')
//连接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/imooc'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
    console.log('mongo connect success')
})
// mongo中的文档的盖帘
const User = mongoose.model('user', new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true}
}))
//新增数据
// User.create({
//     user:'zhaojiawei',
//     age:18
// },function(err,doc){
//     if(!err){
//        console.log(doc)
//     }else{
//         console.log(err)
//     }}
// )

// 查看数据
// User.find({},function(err,doc){
//     res.json(doc)
// })
//   User.findOne({user:'zhaojiawei'},function(err,doc){
//       res.json(doc)
//   })
//新建app

//删除数据
// User.remove({age:18},function(err,doc){
//     console.log(doc)
// })

// 更新数据
User.update({'user':'zhaojiawei'},{'$set':{age:26}},function(err,doc){
    console.log(doc)
})
const app = express()

app.get('/',function(req,res){
    res.send('<h1>Hello world</h1>')
})

app.get('/data',function(req,res){
    // res.json({name:'zhaojiawei',type:'it555'})
    User.find({},function(err,doc){
        res.json(doc)
    })
})
app.listen(9093,function(){
    console.log('node app start at port 9093')
})