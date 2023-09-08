const server=require("./src/app")
const PORT=3001
const {dataBase} =require("./src/db")
const fetchApiDataBase = require("./src/fetchApiData")
server.listen(PORT, ()=>{
    dataBase.sync({alter:true})
    fetchApiDataBase()
    console.log(`servidor levantado en el puerto ${PORT}`)
})