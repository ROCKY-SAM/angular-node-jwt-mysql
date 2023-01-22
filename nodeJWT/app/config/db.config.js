module.exports = {
    HOST: "localhost",
    PORT: "9906",
    USER: "root",
    PASSWORD: "MYSQL_ROOT_PASSWORD",
    DB: "nodeJWT",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

