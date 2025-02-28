import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { CardBlockComponent } from "../card-block/card-block.component";
import { Product } from "../models/product";
import { NgFor, NgIf } from "@angular/common";

@Component({
  selector: "app-cards-container",
  templateUrl: "./cards-container.component.html",
  styleUrls: ["./cards-container.component.css"],
  imports: [NgFor, NgIf, CardBlockComponent],
})
export class CardsContainerComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: "Bird of Paradise",
      price: 30,
      description:
        "Water and humidity are important to keep your Bird of Paradise healthy. It needs consistent watering to keep the soil moist, but never wet or soggy. In addition to careful watering, it will benefit from regular misting to boost its humidity.",
      color: "red",
      src: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
      alt: "Plant Bird of Paradise",
    },
    {
      id: 2,
      name: "Cacti",
      price: 12,
      description:
        "Water and drainage are key to keeping your cactus healthy. It needs infrequent watering, allowing the soil to dry out completely between sessions—overwatering can lead to root rot. Unlike humidity-loving plants, cacti thrive in dry conditions and don't require misting, as too much moisture in the air can harm them.",
      color: "blue",
      src: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80",
      alt: "Cacti",
    },
    {
      id: 3,
      name: "Ferns",
      price: 10,
      description:
        "Water and humidity are essential for keeping your fern thriving. It needs consistent watering to keep the soil evenly moist, but not waterlogged or soggy. In addition to careful watering, ferns benefit from regular misting or a humid environment to maintain the moisture levels they crave.",
      color: "green",
      src: "https://images.unsplash.com/photo-1485902409384-e367af5b5c92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80",
      alt: "Ferns",
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
