import { Component, OnInit } from "@angular/core";
import { fakeListings } from "@app/fake-data";
import { Listing } from "@app/types";

@Component({
  selector: "app-listings-page",
  templateUrl: "./listings-page.component.html",
  styleUrls: ["./listings-page.component.css"],
})
export class ListingsPageComponent implements OnInit {
  private _listings: Listing[] = [];

  constructor() {}

  ngOnInit(): void {
    this._listings = fakeListings;
  }

  public get listings() {
    return this._listings;
  }
}
