const sequelize = require('../config/connection');
const { Store, Menu } = require('../models');

const storeData = require('./storeData.json');
const menuData = require('./menuData.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    await Store.bulkCreate(storeData, {
      individualHooks: true,
      returning: true,
    });
  
    process.exit(0);
  };
  seedDatabase();
