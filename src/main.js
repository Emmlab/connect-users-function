import { users } from './functions/usersfunction';

export default async ({ req, res, log, error }) => {
  if (req.method === 'GET') {
    try {
      log('Ping');
      const result = await users.list();
      return res.send(result, 200);
    } catch (error) {
      error('Error: ', error);
      return res.send('Something went wrong', 400);
    }
  }
  return res.send('Something went wrong', 400);
};
