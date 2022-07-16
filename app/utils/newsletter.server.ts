const FORM_ID = '3259872';
const CONVERTKIT_HOST = 'https://api.convertkit.com/v3/';

type ConvertKitSubscribeData = {
  api_key: string;
  email: string;
  first_name?: string;
}

export const addNewSubscriber = async (email: string, firstName?: string | null) => {
  const url = encodeURI(`${CONVERTKIT_HOST}forms/${FORM_ID}/subscribe`);

  const data: ConvertKitSubscribeData = {
    api_key: process.env.CONVERTKIT_API_KEY as string,
    email,
  };

  if (firstName) {
    data['first_name'] = firstName;
  }

  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
}