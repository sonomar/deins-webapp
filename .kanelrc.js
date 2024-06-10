const path = require("path");
const { makeKyselyHook } = require("kanel-kysely");

/** @type {import('kanel').Config} */
module.exports = {
  connection: {
    host: "localhost",
    user: "lawson",
    password: "lawson",
    database: "utetest1",
  },

  preDeleteOutputFolder: true,
  outputPath: "./schemas",

  customTypeMap: {
    "pg_catalog.tsvector": "string",
    "pg_catalog.bpchar": "string",
  },

  preRenderHooks: [makeKyselyHook()],
};