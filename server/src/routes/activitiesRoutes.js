const {Router}=require("express")
const { postActivityHandler, getActivitiesHandler} = require("../handlers/activitiesHandlers")

const activitiesRouter=Router()

activitiesRouter
    .post("/", postActivityHandler)
    .get("/", getActivitiesHandler)


    module.exports=activitiesRouter