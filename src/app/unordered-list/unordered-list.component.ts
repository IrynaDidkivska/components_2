import { NgFor } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ListItemComponent } from "../list-item/list-item.component";

@Component({
  selector: "app-unordered-list",
  templateUrl: "./unordered-list.component.html",
  styleUrls: ["./unordered-list.component.scss"],
  imports: [NgFor, ListItemComponent],
})
export class UnorderedListComponent implements OnInit {
  items: string[] = ["Item 1", "Item 2", "Item 3"];

  constructor() {}

  ngOnInit(): void {}
}
