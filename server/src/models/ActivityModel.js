const {DataTypes}=require("sequelize")

module.exports=(dataBase)=>{
    dataBase.define("Activity",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            unique:true
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        dificulty:{
            type:DataTypes.INTEGER,
            validate:{
                min:1,
                max:5
            },
            allowNull:false
        },
        duration:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        season:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },
    {
        freezeTableName: true,
        timestamps: false,
        createdAt:false,
        updatedAt:false
    }
    )
}