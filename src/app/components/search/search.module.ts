import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
import { UserprofileComponent } from "../userprofile/userprofile.component";

@NgModule({
  declarations: [SearchComponent, UserprofileComponent],
  imports: [CommonModule, SearchRoutingModule, FormsModule],
})
export class SearchModule {}
