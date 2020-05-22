import { Component, OnInit } from '@angular/core';
import {Customersupport} from '../customersupport';
import {UserserviceService} from '../userservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-support-team',
  templateUrl: './create-support-team.component.html',
  styleUrls: ['./create-support-team.component.css']
})
export class CreateSupportTeamComponent implements OnInit {

  supportcre: Customersupport = new Customersupport();
  submitted = false;

  constructor(private employeeService: UserserviceService,
              private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.supportcre = new Customersupport();
  }

  save() {
    this.employeeService.createSupport(this.supportcre)
      .subscribe(data => console.log(data), error => console.log(error));
    this.supportcre = new Customersupport();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/viewsupportteam']);
  }


}
