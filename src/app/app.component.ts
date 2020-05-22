import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TuCaurtoAdminService';

  constructor( private router: Router) {

  }

  goToListAllUser()
  {
   // @ts-ignore
    this.router.navigate(['/listalluser']);
  }
  goToProperties()
  {
    this.router.navigate(['/listallproperties']);
  }
  goToSupportTeam()
  {
    this.router.navigate(['/viewsupportteam']);
  }
  goToCreateTeam()
  {
    this.router.navigate(['/addsupport']);
  }


}
