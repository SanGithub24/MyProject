module.exports = (sequelize, DataTypes) =>{
    const addoffers = sequelize.define("AddOffers",{
       
        offerimg:{
            type: DataTypes.STRING,
            allowNull: false,
        },

        description:{
            type: DataTypes.STRING,
            allowNull: false,
        },

    })

    return addoffers
}