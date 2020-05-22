import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UserDTO} from '../userdto';
import {Customersupport} from '../customersupport';
import {UserserviceService} from '../userservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-support-team',
  templateUrl: './view-support-team.component.html',
  styleUrls: ['./view-support-team.component.css']
})
export class ViewSupportTeamComponent implements OnInit {
  customers: Observable<Customersupport[]>;
  constructor(private customerService: UserserviceService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.customers = this.customerService.listAllSupport();
  }

  deleteCust(username: string) {
    this.customerService.deleteSupport(username)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }



}
