import { Kysely, PostgresDialect } from 'kysely';

import { Pool } from 'pg';
import {DB} from '../node_modules/kysely-codegen/dist/db';

const db = new Kysely<DB>({dialect:new PostgresDialect({
    pool: new Pool({
      database: process.env.DB_NAME,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: 5432,
      max: 10,
      password:process.env.DB_PASS
    })
  })});

  export default db;