import { Component, OnInit } from '@angular/core';
import { searchHistoryHelper } from 'src/app/helpers/search-history-helper';
import { SharedService } from 'src/app/services/shared.service';
import { StorageService } from 'src/app/services/storage.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  user: string;
  profileInfo: any;

  constructor(
    private apiService: ApiService,
    private sharedService: SharedService,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {}

  searchUser() {
    const url = `https://api.github.com/users/${this.user}`;

    this.apiService.getRequest(url).then((response) => {
      if (response.login) {
        this.profileInfo = response;
        this.sharedService.notifyUserProfile({ profileInfo: this.profileInfo });
        this.addSearchHistory(
          searchHistoryHelper(this.user, this.profileInfo, true)
        );
      } else {
        this.sharedService.notifyUserProfile({
          profileInfo: { error: true },
        });
        this.addSearchHistory(searchHistoryHelper(this.user, null, false));
      }
    });
  }

  addSearchHistory(data) {
    this.storageService.addSearchHistory('searchHistory', data);
  }
}
