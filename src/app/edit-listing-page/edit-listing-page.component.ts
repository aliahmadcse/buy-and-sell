import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Listing} from "@app/types";
import {fakeListings} from "@app/fake-data";

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent implements OnInit {
  id: String = "";
  name: string = "";
  description: string = "";
  price: number | undefined;
  listing: Listing | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
    this.listing = fakeListings.find(listing => listing.id === this.id);
    this.name = this.listing?.name ?? "";
    this.description = this.listing?.description ?? "";
    this.price = this.listing?.price;
  }

  onSubmit() {
    alert("Saving changes to the listing...");
    this.router.navigateByUrl('/my-listings').then(r => console.log(r));
  }
}
