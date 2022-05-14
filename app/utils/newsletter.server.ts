const FORM_ID = '3259872';
const CONVERTKIT_HOST = 'https://api.convertkit.com/v3/';

export const addNewSubscriber = async (email: string) => {
  const url = encodeURI(`${CONVERTKIT_HOST}forms/${FORM_ID}/subscribe`);

  const data = {
    api_key: process.env.CONVERTKIT_API_KEY,
    email,
  };

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
}