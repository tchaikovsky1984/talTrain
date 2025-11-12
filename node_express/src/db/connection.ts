import { Client } from 'pg';

import type { DatabaseConfig } from "../config/types.ts";

export async function connectDB(info: DatabaseConfig): Promise<Client | null> {
  try {
    const client = new Client({
      user: info.DB_USR,
      password: info.DB_PWD,
      host: info.DB_HOSTNAME,
      port: info.DB_PORT,
      database: info.DB_NAME
    });

    await client.connect();

    return client;
  }
  catch (err: any) {
    console.log('===================================');
    console.log("err: " + err.name);
    console.log('===================================');

    return null;
  }
}

export function handleDatabaseError(err: Error): void {
  console.log('===================================');
  console.log("err: " + err.name);
  console.log(err.message);
  console.log('===================================');
}
