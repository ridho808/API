import { Sequelize } from "sequelize";
import db from "../config/db.js";


const {DataTypes} = Sequelize;

const posting = db.define('captions',{
    title : {
        type : DataTypes.STRING
    },
    bahan : {
        type : DataTypes.TEXT
    },
    caption : {
        type : DataTypes.TEXT
    },
    img_url :{
        type : DataTypes.TEXT
    }
},{
    freezeTableName : true
})


export default posting;