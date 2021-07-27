import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

class DBSequelize {
  constructor() {
    const sequelize = new Sequelize(`${process.env.DB_URI}`);

    sequelize
      .authenticate()
      .then(() => console.log('Connection has been established successfully.'))
      .catch((err) => console.error('Unable to connect to the database:', err));
  }
}

export default new DBSequelize();
