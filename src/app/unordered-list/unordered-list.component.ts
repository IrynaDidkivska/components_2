import { NgFor } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ListItemComponent } from "../list-item/list-item.component";

@Component({
  selector: "app-unordered-list",
  templateUrl: "./unordered-list.component.html",
  styleUrls: ["./unordered-list.component.css"],
  imports: [NgFor, ListItemComponent],
})
export class UnorderedListComponent implements OnInit {
  items: string[] = ["Cactus", "Boston Fern", "Snake Plant"];

  constructor() {}

  ngOnInit(): void {}
}
