'use strict';
const chaletImagesModel = (sequelize, DataTypes) => 
sequelize.define('chaletImages', {
    chaletId: {
        type: DataTypes.INTEGER,
        required: true
    },
    imgId: {
        type: DataTypes.INTEGER,
        required: true
    },
    type: {
        type: DataTypes.STRING,
        required: true
    },
    name: {
        type: DataTypes.STRING,
        required: true

    },
    data: {
        type: DataTypes.STRING,
        required: true
    }
});
module.exports =chaletImagesModel;