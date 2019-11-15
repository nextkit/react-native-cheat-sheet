import SQLite, {
  SQLiteDatabase,
  SQLError,
  ResultSet,
  Transaction,
} from 'react-native-sqlite-storage';

import {name as nameDB} from '../../package.json';
/**
 * @class Database
 * @singleton
 */
export default class Database {
  private db: SQLiteDatabase;
  private static instance: Database;

  /**
   * Returns the instance of this class.
   *
   * @returns {Database}
   */
  public static getInstance(): Database {
    if (this.instance == null) {
      this.instance = new Database();
    }

    return this.instance;
  }

  public setConfiguration(key: string, value: any): void {
    // TODO: insert into
  }

  /**
   * Creates the tables in the SQLite database.
   */
  private createTables(): void {
    this.db.executeSql(
      `
      CREATE TABLE IF NOT EXISTS Configuration (
        ID INT PRIMARY KEY NOT NULL,
        KEY CHAR(50) NOT NULL UNIQUE,
        VALUE TEXT NOT NULL
     );`,
      [],
      (transaction: Transaction, resultSet: ResultSet) => {},
      (transaction: Transaction, error: SQLError) =>
        console.error(
          `Failed to create database tables: ${error.code} -> ${error.message}`,
        ),
    );
  }

  /**
   * Connects to the SQLite database.
   */
  private constructor() {
    this.db = SQLite.openDatabase(
      {
        name: nameDB,
        location: 'Library',
      },
      () => console.log(`Connected to ${nameDB} SQLite`),
      (err: SQLError) => {
        throw new Error(
          JSON.stringify({
            msg: `Failed to connect ${nameDB} SQLite`,
            err,
          }),
        );
      },
    );

    this.createTables();
  }
}
