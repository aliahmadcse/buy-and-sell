import { db } from "../database";
import * as admin from "firebase-admin";

export const deleteListingRoute = {
  method: "DELETE",
  path: "/api/listings/{id}",
  handler: async (req, res) => {
    const token = req.headers.authtoken;
    const user = await admin.auth().verifyIdToken(token);
    const userId = user.uid;

    const { id } = req.params;

    await db.query("DELETE FROM listings WHERE id=? AND user_id=?", [id, userId]);

    return { message: "Success!" };
  },
};
