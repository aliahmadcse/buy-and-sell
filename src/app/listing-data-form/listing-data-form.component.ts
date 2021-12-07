import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {

  private _name: string = '';
  private _description: string = '';
  private _price: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    alert("Creating a new Listing...");
    this.router.navigateByUrl('/my-listings').then(r => console.log(r));
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get price(): string {
    return this._price;
  }

  public set price(value: string) {
    this._price = value;
  }

}
