import { db } from "../database";
import * as admin from "firebase-admin";

export const getUserListingRoute = {
  method: "GET",
  path: "/api/users/{userId}/listings",
  handler: async (req, res) => {
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = req.params.userId;

    if (user.uid !== userId) {
      throw Boom.unauthorized("Users can only access their own listings");
    }

    const { results } = await db.query(
      "SELECT * FROM listings WHERE user_id=?",
      [userId]
    );

    return results;
  },
};
