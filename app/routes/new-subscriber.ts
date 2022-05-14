import { ActionFunction, json } from "@remix-run/node";
import { delay } from "~/utils/delay";
import { addNewSubscriber  } from '~/utils/newsletter.server';

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const action: ActionFunction = async ({
  request
}) => {
  if (request.method !== 'POST') {
    return json({
      message: 'Method not allowed',
    }, 405);
  }

  const email = (await request.formData()).get('email');

  if (email == null || !EMAIL_REGEX.test(email as string)) {
    return json({
      error: "Oops! It seems like your e-mail didn't pass my email RegExp 😬",
    });
  }

  await addNewSubscriber(email as string);

  return json({
    success: true
  }, 200);
}