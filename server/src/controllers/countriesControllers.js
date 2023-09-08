const {Country, Activity}=require("../db")
const {Op}=require("sequelize")
const getAllCountries=async(name)=>{
    try {
        const response=await Country.findAll({
            include:[
                {
                    model:Activity,
                    attributes:["id","name", "duration", "dificulty", "season"]
                }
            ]
        })
        if(name){
            const searchCountry= await Country.findAll({
                where:{
                    name:{
                        [Op.iLike]:`%${name}%`
                    }
                },
                include:[
                    {
                        model:Activity,
                        attributes:["id"]
                    }
                ]
            })
            if(!searchCountry.length){
                return "no existen paises con ese nombre"
            }

            return searchCountry
        }

        return response
    } catch (error) {
        throw new Error("error al enviar los paises")
    }

}
const getCountryById=async(id)=>{
    try {
        const response=await Country.findByPk(id,{
            include:[
                {
                    model:Activity,
                    attributes:["name", "duration", "dificulty", "season"]
                }
            ]
        })
        if(response){
            return response
        }else{
            return "no existen paises con este ID"
        }
    } catch (error) {
        return "error al buscar paises con este id"
    }
}
module.exports={
    getAllCountries,
    getCountryById
}