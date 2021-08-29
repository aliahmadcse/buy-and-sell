import {Component, OnInit} from '@angular/core';
import {Listing} from "@app/types";
import {fakeListings} from "@app/fake-data";

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {

  private _listings: Listing[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.listings = fakeListings;
  }

  public onDeleteClicked(listingId: string): void {
    alert(`Deleting your listing with id ${listingId}`)
  }

  public get listings(): Listing[] {
    return this._listings;
  }

  public set listings(value: Listing[]) {
    this._listings = value;
  }
}
