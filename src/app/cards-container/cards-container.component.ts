import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { CardBlockComponent } from "../card-block/card-block.component";
import { Product } from "../models/product";
import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: "app-cards-container",
  templateUrl: "./cards-container.component.html",
  styleUrls: ["./cards-container.component.scss"],
  imports: [NgFor, NgIf, CardBlockComponent],
})
export class CardsContainerComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      price: 110,
      description: "Product 1 description",
      color: "red",
    },
    {
      id: 2,
      name: "Product 2",
      price: 120,
      description: "Product 2 description",
      color: "blue",
    },
    {
      id: 3,
      name: "Product 3",
      price: 130,
      description: "Product 3 description",
      color: "green",
    },
  ];

  selectedProduct: Product | null = null;
  discountApplied = false;

  @ViewChildren(CardBlockComponent) cardBlocks!: QueryList<CardBlockComponent>;

  showDetails(product: Product) {
    this.selectedProduct = product;
  }

  applyDiscount() {
    this.discountApplied = true;

    console.log(this.cardBlocks.toArray());
  }

  constructor() {}

  ngOnInit(): void {}
}
