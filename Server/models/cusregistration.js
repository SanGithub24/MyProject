module.exports = (sequelize, DataTypes) =>{
    const cusregistration = sequelize.define("CustomerReg",{
       
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        email:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        password:{
            type: DataTypes.STRING,
            allowNull: false,
        }

    })

    return cusregistration
}