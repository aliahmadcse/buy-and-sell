import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ContactPageComponent } from "@app/contact-page/contact-page.component";
import { EditListingPageComponent } from "@app/edit-listing-page/edit-listing-page.component";
import { ListingDetailPageComponent } from "@app/listing-detail-page/listing-detail-page.component";
import { ListingsPageComponent } from "@app/listings-page/listings-page.component";
import { MyListingsPageComponent } from "@app/my-listings-page/my-listings-page.component";
import { NewListingsPageComponent } from "@app/new-listings-page/new-listings-page.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/listings",
    pathMatch: "full",
  },
  {
    path: "listings",
    component: ListingsPageComponent,
    pathMatch: "full",
  },
  {
    path: "listings/:id",
    component: ListingDetailPageComponent,
    pathMatch: "full",
  },
  {
    path: "contact/:id",
    component: ContactPageComponent,
    pathMatch: "full",
  },
  {
    path: "edit-listing/:id",
    component: EditListingPageComponent,
    pathMatch: "full",
  },
  {
    path: "my-listings",
    component: MyListingsPageComponent,
    pathMatch: "full",
  },
  {
    path: "new-listing",
    component: NewListingsPageComponent,
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
