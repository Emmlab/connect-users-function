const sdk = require('node-appwrite');

const client = new sdk.Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject(req.env.APPWRITE_PROJECT_ID) // Your project ID
  .setKey(req.env.APPWRITE_USERS_FUNCTION_SECRET_KEY); // Your secret API key

const users = new sdk.Users(client);

export { users };
