import { Component, Input, OnInit } from '@angular/core';
import { dateFormatterHelper } from 'src/app/helpers/date-formatter-helper';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  profileInfo: any;
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.notifyUserProfile$.subscribe((data) => {
      this.profileInfo = data.profileInfo;
      this.profileInfo.created_at = dateFormatterHelper(
        this.profileInfo.created_at,
        'DD-MMM-YYYY'
      );
      console.log(this.profileInfo, 'proileInfo');
    });
  }
}
