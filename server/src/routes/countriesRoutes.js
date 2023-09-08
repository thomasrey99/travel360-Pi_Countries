const {Router}=require("express")
const { getCountriesHandler, getByIdHandler } = require("../handlers/countriesHandlers")




const countriesRouter=Router()

countriesRouter
    .get("/", getCountriesHandler)
    .get("/:id", getByIdHandler)


module.exports=countriesRouter