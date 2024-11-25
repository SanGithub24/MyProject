module.exports = (sequelize, DataTypes) =>{
    const adminpreg = sequelize.define("AdminpannelReg",{
       
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
        },

    })

    return adminpreg
}