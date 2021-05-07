module.exports = {
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "Guilhermefe,001",
  database: process.env.NODE_ENV === "test" ? "syscondom_test" : "syscondom",
  logging: false,
  define: {
    timestamp: true,
    underscored: true,
  },
};
