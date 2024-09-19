const sdk = require('node-appwrite');

module.exports = async function ({ req, res, log }) {
  const client = new sdk.Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.APPWRITE_PROJECT_ID) // Your project ID
    .setKey(process.env.APPWRITE_FUNCTION_SECRET_KEY); // Your secret API key

  if (req.method === 'GET') {
    try {
      const users = new sdk.Users(client);
      const result = await users.list();
      log({ result });
      return res.send({ ok: true, message: 'Successfull', data: result }, 200);
    } catch (error) {
      // log('Error: ', getError);
      return res.json(
        { message: 'Something went wrong!', error: JSON.stringify(error) },
        400
      );
    }
  }
  return res.send('Something went wrong', 400);
};
