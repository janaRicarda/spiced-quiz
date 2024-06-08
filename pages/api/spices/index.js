import dbConnect from "../../../db/connect";
import Spice from "../../../db/models/Spice";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const spices = await Spice.find();
    return response.status(200).json(spices);
  } else {
    response.status(405).json({ message: "Method not allowd" });
  }

  if (request.method === "POST") {
    try {
      const spiceData = request.body;
      await Spice.create(spiceData);

      response.status(201).json({ status: "Spice created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
}
