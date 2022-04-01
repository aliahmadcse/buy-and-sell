import { Component, OnInit } from '@angular/core';
import { Listing } from "@app/types";
import { ListingsService } from '@app/listings.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {

  listings: Listing[] = [];
  isLoading = true;

  constructor(private listingService: ListingsService) {
  }

  ngOnInit(): void {
    this.listingService.getListingsForUser().subscribe(listings => {
      this.listings = listings;
      this.isLoading = false;
    });
  }

  onDeleteClicked(listingId: string): void {
    const result = confirm("Are you sure you want to delete this listing?");
    if (result) {
      this.listingService.deleteListing(listingId).subscribe(() => {
        this.listings = this.listings.filter(listing => listing.id !== listingId);
      });
    }
  }

}
