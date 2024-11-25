module.exports = (sequelize, DataTypes) =>{
    const addempdetails = sequelize.define("EmpDetails",{
       
        empimg:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        empfullname:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        empid:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        bloodtype:{
            type: DataTypes.STRING,
            allowNull: false,
        },


    })

    return addempdetails
}