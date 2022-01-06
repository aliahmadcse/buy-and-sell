import { fakeListings } from "./fake-data";
import Boom from "@hapi/boom";

export const getListingRoute = {
  method: "GET",
  path: "/api/listings/{id}",

  handler: (req, res) => {
    const id = req.params.id;
    const listing = fakeListings.find((listing) => listing.id === id);
    if (!listing)
      throw Boom.notFound(`Listing does not exist with the id ${id}`);
    return listing;
  },
};
