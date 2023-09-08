const { where } = require("sequelize")
const {Activity, Country}=require("../db")


const postActivityController=async (data, idCountries)=>{
    
    try {
        console.log(data)
        const {name}=data
        console.log(name)
        console.log(idCountries)
        const searchActivity=await Activity.findAll({where:{name:name}})
        if(searchActivity.length===0){
            const newActivity=await Activity.create(data)
            idCountries.forEach((country)=>{
                newActivity.addCountry(country)
            })
            return newActivity
        }else{
            throw new Error("Ya existe una actividad con este nombre")
        }
        
    } catch (error) {
        throw new Error({error:"Error al crear la actividad"})
    }
}
const getActivityController=async ()=>{
    try {
        const activities= await Activity.findAll({
            include:[
                {
                    model:Country,
                    attributes:["id"]
                }
            ]
        })
        return activities
    } catch (error) {
        throw new Error({error:error.message})
    }
}
module.exports={
    postActivityController,
    getActivityController
}