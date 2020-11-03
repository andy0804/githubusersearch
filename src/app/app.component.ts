import { Component } from "@angular/core";
import { SharedService } from "./services/shared.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "git-hub-app";
  showLoader = false;

  constructor(private sharedService: SharedService) {
        this.sharedService.notifySpinner$.subscribe((data) => {
      this.showLoader = data.flag;
    });
  }
}
