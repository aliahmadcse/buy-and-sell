import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { fakeListings } from "@app/fake-data";
import { Listing } from "@app/types";

@Component({
  selector: "app-listing-detail-page",
  templateUrl: "./listing-detail-page.component.html",
  styleUrls: ["./listing-detail-page.component.css"],
})
export class ListingDetailPageComponent implements OnInit {
  private _listing: Listing | null = null;
  private _id: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this._id = this.route.snapshot.paramMap.get("id");
    this._listing =
      fakeListings.find((listing) => listing.id === this.id) ?? null;
  }

  public get listing() {
    return this._listing;
  }

  public get id() {
    return this._id;
  }
}
