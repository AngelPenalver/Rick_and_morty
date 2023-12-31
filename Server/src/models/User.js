const { DataTypes } = require('sequelize');

module.exports = User = (sequelize) => {
   sequelize.define('User', {
      id:{
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true
      },
      email:{
         type: DataTypes.STRING,
         allowNull: false,
         isEmail:true
      },
      password:{
         type: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
   return User
};
