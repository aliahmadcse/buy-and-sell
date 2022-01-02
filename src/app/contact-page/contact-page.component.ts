import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {fakeListings} from "@app/fake-data";
import {Listing} from "@app/types";

@Component({
  selector: "app-contact-page",
  templateUrl: "./contact-page.component.html",
  styleUrls: ["./contact-page.component.css"],
})
export class ContactPageComponent implements OnInit {
  email: string = "";
  message: string = "";
  id: string = "";
  listing: Listing | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") ?? "";
    this.listing =
      fakeListings.find((listing) => listing.id === this.id);
    this.message = `I am interested in your ${this.listing?.name.toLowerCase()}!`;
  }

  public sendMessage(): void {
    alert("Your Message has been sent");
    this.router.navigateByUrl("/listings").then(res => console.log(res));
  }
}
