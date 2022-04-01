import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Listing } from "@app/types";
import { ListingsService } from '@app/listings.service';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
  id: string = "";
  name: string = "";
  description: string = "";
  price: number | undefined;
  listing: Listing | undefined;

  constructor(private router: Router, private route: ActivatedRoute,
    private listingService: ListingsService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
    // TODO: a check on id can be placed here
    this.listingService.getListingById(this.id).subscribe(listing => {
      this.listing = listing;
      this.name = this.listing?.name ?? "";
      this.description = this.listing?.description ?? "";
      this.price = this.listing?.price;
    });
  }

  onSubmit(listing: Listing) {
    this.listingService.editListing({ ...listing, id: this.id }).subscribe(listing => {
      this.router.navigateByUrl('/my-listings').then(r => console.log(r));
    });
  }
}
