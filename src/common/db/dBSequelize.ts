/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

export default class DBSequelize {
  private static instanceSequelize: Sequelize;

  public static getDBInstance(): Sequelize {
    if (!DBSequelize.instanceSequelize) {
      this.instanceSequelize = new Sequelize(`${process.env.DB_URI}`);

      this.instanceSequelize
        .authenticate()
        .then(() => console.log('Connection has been established successfully.'))
        .catch((err) => console.error('Unable to connect to the database:', err));

      this.instanceSequelize.sync({ force: true })
        .then(() => console.log('Sync has been established.'))
        .catch((err) => console.error('Error sync:', err));

      return DBSequelize.instanceSequelize;
    }
    return DBSequelize.instanceSequelize;
  }
}
