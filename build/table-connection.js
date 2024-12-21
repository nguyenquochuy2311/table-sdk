"use strict";
import { assign, values } from "lodash";
import { createConnection } from "mysql2/promise";
import { Sequelize } from "sequelize-typescript";
import { Models } from "./models";
const TABLE_CONNECTIONS = {};
const DEFAULT_CONFIG = {
  dialect: "mysql",
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci"
  },
  pool: {
    min: 0,
    max: 5
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true
    }
  },
  benchmark: false,
  logQueryParameters: false,
  repositoryMode: true
};
const _connect = (dbName) => {
  try {
    const username = DEFAULT_CONFIG.username;
    const password = DEFAULT_CONFIG.password;
    const conn = new Sequelize(dbName, username, password, DEFAULT_CONFIG);
    conn.disconnect = async function() {
      await this.close();
      delete TABLE_CONNECTIONS[dbName];
    };
    conn.createTransaction = async function(options = void 0, callBack = void 0) {
      try {
        const transaction = await this.transaction(options, callBack);
        transaction.safeCommit = async function() {
          return this.finished !== "commit" && this.finished !== "rollback" ? await this.commit() : void 0;
        };
        transaction.safeRollback = async function() {
          return this.finished !== "commit" && this.finished !== "rollback" ? await this.rollback() : void 0;
        };
        return transaction;
      } catch (error) {
        throw error;
      }
    };
    conn.addModels(values(Models));
    TABLE_CONNECTIONS[dbName] = conn;
    return conn;
  } catch (error) {
    throw error;
  }
};
const initTableConnection = async (opts) => {
  assign(DEFAULT_CONFIG, opts);
  let connection;
  try {
    connection = await createConnection({
      host: opts.host,
      port: opts.port,
      user: opts.username,
      password: opts.password,
      ssl: {
        rejectUnauthorized: true
      }
    });
    await connection.ping();
    console.log("Database host connected");
  } catch (error) {
    throw error;
  } finally {
    await connection?.end();
  }
};
const getTableConnection = (workspaceID) => {
  if (!DEFAULT_CONFIG.database) {
    throw new Error("Database is not set");
  }
  const dbName = `${DEFAULT_CONFIG.database}_${workspaceID}`;
  const conn = TABLE_CONNECTIONS[dbName];
  return conn || _connect(dbName);
};
export { getTableConnection, initTableConnection };
