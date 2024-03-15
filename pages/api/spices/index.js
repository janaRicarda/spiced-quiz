import dbConnect from "../../../db/connect";
import Spice from "../../../db/models/Spice";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const spices = await Spice.find();
    return response.status(200).json(spices);
  }

  if (request.method === "POST") {
    try {
      const spiceData = request.body;
      const spice = new Spice(spiceData);
      await spice.save();
      return response.status(201).json({ status: "Spice created." });
    } catch (error) {
      console.error(error);
      return response.status(400).json({ error: error.message });
    }
  }
}
