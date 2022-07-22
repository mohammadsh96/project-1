'use strict';
const apartmentsModel = (sequelize, DataTypes) => 
sequelize.define('apartments', {
    apartmentId: {
        type: DataTypes.INTEGER,
        required: true
    },
    userId: {
        type: DataTypes.INTEGER,
        required: true
    },
    process: {
        type: DataTypes.ENUM('sell','rent'),
        required: true
    },
    owner: {
        type: DataTypes.STRING,
        required: true

    },
    price: {
        type: DataTypes.FLOAT,
        required: true
    },
    area: {
        type: DataTypes.FLOAT,
        required: true
    },
    
    FloorNum: {
        type: DataTypes.ENUM('1','2','3','4','5','G','basement','roof'),
        required: true
    },
    buildingAge: {
        type: DataTypes.INTEGER,
        required: false
    },
    rooms: {
        type: DataTypes.INTEGER,
        required: false,
    },
    bathRooms: {
        type: DataTypes.INTEGER,
        required: false,
    },

    Avilability: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    elevator: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

    Furnished: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

    rentDuration: {
        type: DataTypes.ENUM("daily","weekly","monthly","yearly"),
        allowNull: false,
    },

    city: {
        type: DataTypes.ENUM("Amman","Zarqa","Irbid","Aqaba","Mafraq","Jarash","Ma'an","Karak","AL-Salt","Ajloun","Tafilah","al-Balqa"),
        allowNull: false,
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    MoreInfo: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});

module.exports = apartmentsModel;