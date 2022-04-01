import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ListingsService } from '@app/listings.service';
import { Listing } from '@app/types';

@Component({
  selector: 'app-new-listings-page',
  templateUrl: './new-listings-page.component.html',
  styleUrls: ['./new-listings-page.component.css']
})
export class NewListingsPageComponent implements OnInit {

  constructor(private router: Router, private listingService: ListingsService) {
  }

  ngOnInit(): void {
  };

  onSubmit(listing: Listing) {
    this.listingService.createNewListing(listing).subscribe(listing => {
      console.log(listing);
      this.router.navigateByUrl('/my-listings').then(r => console.log(r));
    });
  }
}
