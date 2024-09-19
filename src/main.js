const sdk = require('node-appwrite');

module.exports = async function ({ req, res }) {
  console.log('Ping');
  console.log(req);
  const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(req.variables['APPWRITE_PROJECT_ID']) // Your project ID
    .setKey(req.variables['APPWRITE_USERS_FUNCTION_SECRET_KEY']); // Your secret API key

  if (req.method === 'GET') {
    try {
      const users = new sdk.Users(client);
      const result = await users.list();
      return res.send(result, 200);
    } catch (getError) {
      console.log('Error: ', getError);
      return res.send('Something went wrong', 400);
    }
  }
  return res.send('Something went wrong', 400);
};
