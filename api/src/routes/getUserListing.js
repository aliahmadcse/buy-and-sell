import { db } from "../database";

export const getUserListingRoute = {
  method: "GET",
  path: "/api/users/{userId}/listings",
  handler: async (req, res) => {
    const userId = req.params.userId;
    const { results } = await db.query(
      "SELECT * FROM listings WHERE user_id=?",
      [userId]
    );

    return results;
  },
};
