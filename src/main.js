const sdk = require('node-appwrite');

// module.exports = async function ({ req, res }) {
//   const client = new sdk.Client()
//     .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
//     .setProject(process.env.APPWRITE_PROJECT_ID) // Your project ID
//     .setKey(process.env.APPWRITE_FUNCTION_API_KEY); // Your secret API key

//   if (req.method === 'GET') {
//     try {
//       const users = new sdk.Users(client);
//       const result = await users.list();
//       // console.log({ result });
//       return res.json({ ok: true, message: 'Successfull' }, 200);
//     } catch (error) {
//       // log('Error: ', getError);
//       return res.json(
//         { message: 'Something went wrong!', error: JSON.stringify(error) },
//         400
//       );
//     }
//   }
//   return res.send('Something went wrong', 400);
// };

export default async ({ req, res, log, error }) => {
  // Set project and set API key
  const client = new Client()
    .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
    .setKey(req.headers['x-appwrite-key']);

  // const databases = new Databases(client);

  try {
    const users = new sdk.Users(client);
    const result = await users.list();
    log({ result });
    return res.json({ ok: true, message: 'Successfull' }, 200);
  } catch (e) {
    error('Failed to create document: ' + e.message);
    return res.text('Failed to create document');
  }

  // return res.text('Document created');
};
