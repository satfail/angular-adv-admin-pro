import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {




  constructor(private setttingsService: SettingsService) { }

  ngOnInit(): void {

    this.setttingsService.checkCurrentTheme();
  }

  changeTheme(color:string){
    this.setttingsService.changeTheme(color);
  }

}
