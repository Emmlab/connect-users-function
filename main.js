import { Client, Databases, Query } from 'node-appwrite';
import { users } from './functions/usersfunction';

export default async function ({ req, res }) {
  const result = await users.list();
  return res.json({ ok: true, data: result });
}
