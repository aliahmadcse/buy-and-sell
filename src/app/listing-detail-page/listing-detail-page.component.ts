import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {fakeListings} from "@app/fake-data";
import {Listing} from "@app/types";

@Component({
  selector: "app-listing-detail-page",
  templateUrl: "./listing-detail-page.component.html",
  styleUrls: ["./listing-detail-page.component.css"],
})
export class ListingDetailPageComponent implements OnInit {
  listing: Listing | undefined;
  id: string = "";

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
    this.listing =
      fakeListings.find((listing) => listing.id === this.id)
  }
}
