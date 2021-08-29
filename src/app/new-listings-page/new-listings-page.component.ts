import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-listings-page',
  templateUrl: './new-listings-page.component.html',
  styleUrls: ['./new-listings-page.component.css']
})
export class NewListingsPageComponent implements OnInit {
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
