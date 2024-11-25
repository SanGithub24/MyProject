module.exports = (sequelize, DataTypes) =>{
    const customerregdetails = sequelize.define("CusRegDetails",{
       
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

    return customerregdetails
}