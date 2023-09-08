const { getAllCountries, getCountryById } = require("../controllers/countriesControllers")

const getCountriesHandler=async(req, res)=>{
    const {name}=req.query
    try {
        const response=await getAllCountries(name)
        return res.status(200).json(response)
    } catch (error) {
        throw new Error(error)
    }
}
const getByIdHandler=async(req, res)=>{
    const {id}=req.params
    try {
        const response=await getCountryById(id)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}

module.exports={
    getCountriesHandler,
    getByIdHandler
}