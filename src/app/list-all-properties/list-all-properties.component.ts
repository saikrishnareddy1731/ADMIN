import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {UserDTO} from '../userdto';
import {UserserviceService} from '../userservice.service';
import {Router} from '@angular/router';
import {Property} from '../property';

@Component({
  selector: 'app-list-all-properties',
  templateUrl: './list-all-properties.component.html',
  styleUrls: ['./list-all-properties.component.css']
})
export class ListAllPropertiesComponent implements OnInit {

  properties: Observable<Property[]>;
  constructor(private propertservice: UserserviceService , private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.properties = this.propertservice.listAllProperty();
  }


  deleteProperty(id: number)
  {
    this.propertservice.deleteProperty(id).subscribe((data) => {

        console.log(data);
        this.reloadData();
      },
      error => {
        console.log(error.error);
      });
  }


}
