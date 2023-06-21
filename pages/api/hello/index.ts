import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  DateNow: string;
  name: string;
  email: string;
  phone: number;
  age: number;
  carType: string;
  pickupDate: string;
  pickupLocation: string;
  dropOffDate: string;
  dropOffLocation: string;
  note: string;
  babySeatChecked: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only Post requests are allowed" });
  }

  const body = req.body as SheetForm;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:M1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.DateNow,
            body.name,
            body.email,
            body.phone,
            body.age,
            body.carType,
            body.pickupDate,
            body.pickupLocation,
            body.dropOffDate,
            body.dropOffLocation,
            body.note,
            body.babySeatChecked,
          ],
        ],
      },
    });

    return res.status(200).json({
      data: response.data,
    });
  } catch (e) {
    console.error(e);
    return res.status(500).send({ message: "Something went wrong" });
  }
}
