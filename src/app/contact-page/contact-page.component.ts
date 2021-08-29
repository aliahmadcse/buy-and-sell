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
  private _email: string = "";
  private _message: string = "";
  private _listing: Listing | null = null;
  private _id: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.listing =
      fakeListings.find((listing) => listing.id === this.id) ?? null;
    this.message = `I am interested in your ${this.listing?.name.toLowerCase()}!`;
  }

  public sendMessage(): void {
    alert("Your Message has been sent");
    this.router.navigateByUrl("/listings");
  }

  public get listing() {
    return this._listing;
  }

  public set listing(listing) {
    this._listing = listing;
  }

  public get message() {
    return this._message;
  }

  public set message(message) {
    this._message = message;
  }

  public get email() {
    return this._email;
  }

  public set email(email) {
    this._email = email;
  }

  public get id() {
    return this._id;
  }

  public set id(id) {
    this._id = id;
  }
}
