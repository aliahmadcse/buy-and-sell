import { Component, OnInit } from "@angular/core";
import { fakeListings } from "@app/fake-data";
import { Listing } from "@app/types";

@Component({
  selector: "app-listings-page",
  templateUrl: "./listings-page.component.html",
  styleUrls: ["./listings-page.component.css"],
})
export class ListingsPageComponent implements OnInit {
  listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    this.listings = fakeListings;
  }
}
