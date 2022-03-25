import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ListingsService } from '@app/listings.service';
import { Listing } from "@app/types";

@Component({
  selector: "app-listing-detail-page",
  templateUrl: "./listing-detail-page.component.html",
  styleUrls: ["./listing-detail-page.component.css"],
})
export class ListingDetailPageComponent implements OnInit {
  isLoading = true;
  listing: Listing | undefined;
  id: string = "";

  constructor(private route: ActivatedRoute, private listingService: ListingsService) {
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get("id") ?? "";
    this.listingService.getListingById(this.id).subscribe(listing => {
      this.listing = listing;
      this.isLoading = false;
    });

    this.listingService.addViewToListing(this.id).subscribe(() => {
      console.log("View added");

    });
  }
}
