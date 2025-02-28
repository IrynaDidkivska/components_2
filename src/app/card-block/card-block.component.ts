import {
  Component,
  EventEmitter,
  Input,
  Output,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import { Product } from "../models/product";

@Component({
  selector: "app-card-block",
  templateUrl: "./card-block.component.html",
  styleUrls: ["./card-block.component.css"],
})
export class CardBlockComponent implements AfterViewInit {
  @Input() product!: Product;
  @Input() discount = false;
  @Output() viewDetails = new EventEmitter<Product>();

  constructor(private elRef: ElementRef) {}

  get discountedPrice(): number {
    return this.discount ? this.product.price * 0.85 : this.product.price;
  }

  showDetails() {
    this.viewDetails.emit(this.product);
  }

  ngAfterViewInit() {
    const colorElement = this.elRef.nativeElement.querySelector("b");
    if (colorElement) {
      colorElement.style.backgroundColor = this.product.color;
      colorElement.style.padding = "5px";
      colorElement.style.color = "white";
    }
  }
}
