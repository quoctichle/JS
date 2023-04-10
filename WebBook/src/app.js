const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const port = 4444

// Import routes
const HomeRouter = require("../src/routes/Home.routes")
const BookRouter = require("../src/routes/Book.routes")
const CategoryRouter = require("../src/routes/Categories.routes")
const ChapterRouter = require("../src/routes/Chapter.routes")
const UserRouter = require("../src/routes/User.routes")

// view engine setup
app.set('view engine', 'pug');
app.set('views', 'src/Views');

// Enable Method Override
app.use(methodOverride('_method'));

// Enable Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit:'10mb' ,extended: false }));  

// Enable Routes
app.use('/', HomeRouter)
app.use('/Books', BookRouter)
app.use('/Category', CategoryRouter)
app.use('/Chapter', ChapterRouter)
app.use('/User', UserRouter)

app.listen(port, () => {
    console.log(`Server listening ${port}`)
})