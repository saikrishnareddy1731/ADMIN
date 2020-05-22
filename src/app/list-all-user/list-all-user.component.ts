import { Component, OnInit } from '@angular/core';
import {UserserviceService} from '../userservice.service';
import {Router} from '@angular/router';
import {UserDTO} from '../userdto';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-list-all-user',
  templateUrl: './list-all-user.component.html',
  styleUrls: ['./list-all-user.component.css']
})
export class ListAllUserComponent implements OnInit {
  users: Observable<UserDTO[]>;
  constructor(private userService: UserserviceService , private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.listAllUsers();
  }


  deleteUser(email: string)
{
this.userService.deleteUser(email).subscribe((data) => {

    console.log(data);
    this.reloadData();
  },
  error => {
    console.log(error.error);
  });
}



}
