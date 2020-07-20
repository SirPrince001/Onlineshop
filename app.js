const express = require('express')

const bodyParser = require('body-parser')

const path = require('path')

const app = express()

const product_route = require('./myroutes/product')

const shop_route = require('./myroutes/shop')
const pageNotFoundcontroller = require('./controllers/pageNotFound')


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname , 'css')))
app.use(express.static(path.join(__dirname , 'css')))
app.use(product_route)
app.use(shop_route)

// configuring pug
// app.set('view engine' , 'pug')
// configuring ejs
app.set('view engine' , 'ejs')
app.set('views' , 'views')

app.use(pageNotFoundcontroller.pageNotFound)





// app.use('/', (req,res,next) => {
//     res.send('Testing my server router')
//     next()
// })

app.listen(2000)