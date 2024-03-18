import dbConnect from "@/db/connect";
import Spice from "@/db/models/Spice";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const spice = await Spice.findById(id);

    if (!spice) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(spice);
  }
}