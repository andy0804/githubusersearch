import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class StorageService {
  constructor() {}
  getSearchHistory(key) {
    return localStorage.getItem(key);
  }

  addSearchHistory(key, data) {
    const currentStorageList = JSON.parse(this.getSearchHistory(key));
    if (currentStorageList) {
      data._id = currentStorageList.length + 1;
      currentStorageList.push(data);
      localStorage.setItem(key, JSON.stringify(currentStorageList));
    } else {
      data._id = 1;
      localStorage.setItem(key, JSON.stringify([data]));
    }
  }
  removeAllFromStorage(key) {
    localStorage.removeItem(key);
  }

  removeFromStorage(key, id) {
    let currentStorageList = JSON.parse(this.getSearchHistory(key));
    currentStorageList = currentStorageList.filter((i) => i._id !== id);
    localStorage.setItem(key, JSON.stringify(currentStorageList));
  }
  updateSearchHistory(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
