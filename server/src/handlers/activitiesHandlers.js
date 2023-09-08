const {postActivityController, getActivityController}=require("../controllers/activitiesControllers")

const postActivityHandler=async (req, res)=>{
    const { idCountries, name, duration, season, dificulty}=req.body
    try {
        const data= {
            name:name,
            dificulty:Number(dificulty),
            duration:Number(duration),
            season:season
        }
        const newActivity= await postActivityController(data, idCountries)
        return res.status(201).json(newActivity)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}
const getActivitiesHandler=async(req, res)=>{
    try {
        const response= await getActivityController()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
}
module.exports={
    postActivityHandler,
    getActivitiesHandler
}