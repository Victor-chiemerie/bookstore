const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const createApp = async () => {
  const get = await fetch(`${BASE_URL}/apps/`,
    {
      method: 'POST',
      body: JSON.stringify({ name: 'bobbys library' }),
      headers: { 'Content-type': 'application/json' },
    });
  const response = await get.json();
  return response;
};

createApp();

export default BASE_URL;

// z9xY0wHY2FpZX8MwxMcy
