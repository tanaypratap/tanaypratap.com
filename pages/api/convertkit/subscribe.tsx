import { NextApiRequest, NextApiResponse } from "next";

const API_KEY = "oqD2qtQCnCiZvdc2NBLlcA";
const BASE_URL = "https://api.convertkit.com/v3";

function subscribeToForm(params: { formId: string; email: string }) {
  const url = [BASE_URL, `forms`, params.formId, "subscribe"].join("/");

  console.info({ params });

  const headers = new Headers({
    "Content-Type": "application/json; charset=utf-8",
  });

  return fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      api_key: API_KEY,
      email: params.email,
    }),
  });
}

async function subscribeToFormHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;

  console.info({ body });

  // best to validate this with Zod...

  await subscribeToForm({
    formId: body.formId,
    email: body.email,
  });

  return res.send({ success: true });
}

export default subscribeToFormHandler;
