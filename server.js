const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const categoriesData = require('./data/categories.js')
const schoolsData = require('./data/schools.js')
//const itemsData = require('./data/items.js')

//Create express app
const app = express()

//middleware for app, run server from directory public
app.use('/', serveStatic(path.join(__dirname, '/public')))

//once get request is triggered (by visiting link), server responds with a response, returning our data
app.use('/api/categories', function(req,res){
    res.json(categoriesData)
})
app.use('/api/schools', function(req,res){
	res.json(schoolsData)
//   console.log('The Data is ', categoriesData[0].listings.slug)
})
//app.use('/api/:uc/:category/:listings', function(req,res){
//    let newData;
//    if(req.query.min_price != undefined){
//        
//    }
//    let queryLength = Object.keys(req.query).length
//    if (req.params.listings !== "undefined"){
//    newData = itemsData.filter((item, i) =>{
//        return item.area == req.params.uc &&
//        item.category == req.params.category &&
//        item.listing == req.params.listings
//    })
//        if(queryLength !== 0){
//          if(req.query.min_price != 'undefined'){
//        newData = itemsData.filter((item, i) =>{
//            return item.area == req.params.uc &&
//        item.category == req.params.category &&
//        item.listing == req.params.listings &&
//        item.price >= req.query.min_price 
//        })
//          }
//          if(req.query.max_price != 'undefined'){
//              newData = itemsData.filter((item, i) =>{
//            return item.area == req.params.uc &&
//        item.category == req.params.category &&
//        item.listing == req.params.listings && 
//        item.price <= req.query.max_price
//        })
//          }
//    }
//    
//    } else if (req.params.listings === "undefined")  {
//         newData = itemsData.filter((item, i) =>{
//        return item.area == req.params.uc &&
//        item.category == req.params.category
//    })
//        if(queryLength !== 0){
//          if(req.query.min_price != 'undefined'){
//        newData = itemsData.filter((item, i) =>{
//            return item.area == req.params.uc &&
//        item.category == req.params.category &&
//        item.price >= req.query.min_price 
//        })
//          }
//          if(req.query.max_price != 'undefined'){
//              newData = itemsData.filter((item, i) =>{
//            return item.area == req.params.uc &&
//        item.category == req.params.category &&
//        item.price <= req.query.max_price
//        })
//          }
//    }
//}
//    
//    console.log(newData)
//    res.json(newData) //very important.. this tells callback to send newData to route handler
//})

//app.get('/Newpost1?school=${schoolChoice}&category=${categoryChoice}', function(req,res){
//	
//	console.log(req.query)
//})

app.get('*', function(req,res){
    
    res.sendFile(__dirname + '/public/index.html')
})

//create default port for app, apart from default port 3000
const port = process.env.PORT || 5000
app.listen(port)

console.log('server started on port ' + port)

