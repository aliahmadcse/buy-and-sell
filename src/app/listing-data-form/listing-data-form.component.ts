import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Listing } from "@app/types";

@Component({
  selector: "app-listing-data-form",
  templateUrl: "./listing-data-form.component.html",
  styleUrls: ["./listing-data-form.component.css"],
})
export class ListingDataFormComponent implements OnInit {
  name: string = "";
  description: string = "";
  price: number | undefined;

  @Input() submitButtonText: String = "";
  @Input() currentName: string = "";
  @Input() currentDescription: string = "";
  @Input() currentPrice: number | undefined;

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor() {}

  ngOnInit(): void {
    this.name = this.currentName;
    this.description = this.currentDescription;
    this.price = this.currentPrice;
  }

  public onButtonClicked(): void {
    this.onSubmit.emit({
      id: "",
      name: this.name,
      description: this.description,
      price: this.price,
      view: 0,
    });
  }
}
