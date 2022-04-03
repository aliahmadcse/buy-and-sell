import { getAllListingsRoute } from "./getAllListing";
import { getListingRoute } from "./getListing";
import { addViewToListingRoute } from "./addViewToListing";
import { getUserListingRoute } from "./getUserListing";
import { createNewListingRoute } from "./createNewListing";
import { updateListingRoute } from "./updateListing";
import { deleteListingRoute } from "./deleteListing";
import { filesRoutes, staticFilesRoute } from './files';

export default [
  getAllListingsRoute,
  getListingRoute,
  addViewToListingRoute,
  getUserListingRoute,
  createNewListingRoute,
  updateListingRoute,
  deleteListingRoute,
  staticFilesRoute,
  ...filesRoutes
];
