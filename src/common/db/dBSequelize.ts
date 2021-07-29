/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();
let url = '';
if (process.env.NODE_ENV === 'test') {
  url = process.env.DB_URI_TEST;
} else if (process.env.NODE_ENV === 'development') {
  url = process.env.DB_URI_DEV;
} else if (process.env.NODE_ENV === 'production') {
  url = process.env.DB_URI_PROD;
}

class DBSequelize {
  getSequelize(): Sequelize {
    const instanceSequelize = new Sequelize(`${url}`);
    this.authenticateDB(instanceSequelize);
    /**
    * Run only the first time and in tests
    */
    this.syncDB(instanceSequelize);
    return instanceSequelize;
  }

  async authenticateDB(instanceSequelize: Sequelize) {
    await instanceSequelize.authenticate();
    console.log('Connection has been established successfully.');
  }

  async syncDB(instanceSequelize: Sequelize) {
    await instanceSequelize.sync();
    console.log('Drop and re-sync db.');
  }
}

export default new DBSequelize();
