import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"],
  imports: [NgIf],
})
export class ListItemComponent {
  @Input() text?: string;
}
