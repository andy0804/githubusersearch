import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  searchHistory: any;
  id: any;
  sortFav = false;
  sortSearchType = false;
  constructor(
    private sharedService: SharedService,
    private storagService: StorageService
  ) {}

  ngOnInit() {
    this.searchHistory = JSON.parse(
      this.storagService.getSearchHistory('searchHistory') || ''
    );
    console.log(this.searchHistory);
  }
  setCurrentRecord(item) {
    this.id = item;
  }
  deleteUser() {
    this.storagService.removeFromStorage('searchHistory', this.id);
    this.searchHistory = this.searchHistory.filter((i) => i._id !== this.id);
  }
  toggleFavourite(id) {
    this.searchHistory.forEach((element) => {
      if (String(element._id) === String(id)) {
        element.isFavourite = !element.isFavourite;
      }
    });
    this.storagService.updateSearchHistory('searchHistory', this.searchHistory);
  }

  updateFilter(text) {
    if (text.toLowerCase() === 'all') {
      this.searchHistory = JSON.parse(
        this.storagService.getSearchHistory('searchHistory') || ''
      );
    } else {
      this.searchHistory = this.searchHistory.filter((i) => i.isFavourite);
    }
  }
  sortFavourite(direction) {
    if (!direction) {
      this.searchHistory.sort((a, b) => a.isFavourite - b.isFavourite);
    } else {
      this.searchHistory.sort((a, b) => b.isFavourite - a.isFavourite);
    }

    this.sortFav = !this.sortFav;
  }
  sortSearch(direction) {
    if (!direction) {
      this.searchHistory.sort((a, b) =>
        a.searchText > b.searchText ? 1 : b.searchText > a.searchText ? -1 : 0
      );
    } else {
      this.searchHistory.sort((a, b) =>
        b.searchText > a.searchText ? 1 : a.searchText > b.searchText ? -1 : 0
      );
    }

    this.sortSearchType = !this.sortSearchType;
  }
}
