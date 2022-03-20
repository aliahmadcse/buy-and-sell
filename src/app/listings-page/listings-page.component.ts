import { Component, OnInit } from "@angular/core";
import { ListingsService } from "@app/listings.service";
import { Listing } from "@app/types";

@Component({
  selector: "app-listings-page",
  templateUrl: "./listings-page.component.html",
  styleUrls: ["./listings-page.component.css"],
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor(private listingsService: ListingsService) {}

  ngOnInit(): void {
    this.listings = this.listingsService.getListings();
  }
}
