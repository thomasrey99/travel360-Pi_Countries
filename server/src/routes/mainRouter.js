const {Router}=require("express")
const activitiesRoutes=require("./activitiesRoutes")
const countriesRoutes=require("./countriesRoutes")

const mainRouter=Router()

mainRouter.use("/countries", countriesRoutes)

mainRouter.use("/activities", activitiesRoutes)


module.exports=mainRouter