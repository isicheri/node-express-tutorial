const app = require('./index')
const sequilize = require('./db/database')

app.listen(2500,() => {
    console.log('server is running')
})

sequilize.authenticate().then(() => {
    console.log('database connected succesfully')
}).catch((err) => {
    console.log('this is the error',err.sqlMessage)
})