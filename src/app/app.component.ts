import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { CardsContainerComponent } from "./cards-container/cards-container.component";
import { UnorderedListComponent } from "./unordered-list/unordered-list.component";

@Component({
  selector: "app-root",
  imports: [CardsContainerComponent, RouterOutlet, UnorderedListComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "components_2";
}
