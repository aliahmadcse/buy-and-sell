import { db } from "../database";

export const addViewToListingRoute = {
  method: "POST",
  path: "/api/listings/{id}/add-view",
  handler: async (req, res) => {
    const id = req.params.id;
    await db.query("UPDATE listings SET view=view+1 WHERE id = ?", [id]);
    const { results } = await db.query("SELECT * FROM listings WHERE id =?", [
      id,
    ]);
    return results[0];
  },
};
