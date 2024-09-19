// const sdk = require('node-appwrite');

// module.exports = async function ({ req, res }) {
//   // const client = new sdk.Client()
//   //   .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//   //   .setProject(process.env['APPWRITE_PROJECT_ID']) // Your project ID
//   //   .setKey(process.env['APPWRITE_FUNCTION_API_KEY']); // Your secret API key

//   if (req.method === 'GET') {
//     try {
//       // const users = new sdk.Users(client);
//       // const result = await users.list();
//       // console.log({ result });
//       return res.json({ ok: true, message: 'Successfull' }, 200);
//     } catch (error) {
//       // log('Error: ', getError);
//       return res.send(
//         { message: 'Something went wrong!', error: JSON.stringify(error) },
//         400
//       );
//     }
//   }
//   return res.send('Something went wrong', 400);
// };
import { Client } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {
  // Why not try the Appwrite SDK?
  //
  // Set project and set API key
  // const client = new Client()
  //    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
  //    .setKey(req.headers['x-appwrite-key']);

  // You can log messages to the console
  log('Hello, Logs!');

  // If something goes wrong, log an error
  error('Hello, Errors!');

  // The `req` object contains the request data
  if (req.method === 'GET') {
    // Send a response with the res object helpers
    // `res.text()` dispatches a string back to the client
    return res.text('Hello, World!');
  }

  // `res.json()` is a handy helper for sending JSON
  return res.json({
    motto: 'Build like a team of hundreds_',
    learn: 'https://appwrite.io/docs',
    connect: 'https://appwrite.io/discord',
    getInspired: 'https://builtwith.appwrite.io',
  });
};
