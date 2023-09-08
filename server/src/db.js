const {Sequelize}=require("sequelize")
const countryModel=require("./models/CountryModel")
const activityModel=require("./models/ActivityModel")
require("dotenv").config()

const {
    DB_DIALECT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_HOST,
    DB_PORT
}=process.env

const dataBase=new Sequelize(
    `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,{logging:false}
)

countryModel(dataBase)
activityModel(dataBase)

//*Relaciones
const {Country, Activity}=dataBase.models

Country.belongsToMany(Activity, {through:"countryActivity"})
Activity.belongsToMany(Country, {through:"countryActivity"})

module.exports={
    ...dataBase.models,
    dataBase
}