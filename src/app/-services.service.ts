import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient, private toastr: ToastrService, private router: Router) {
   url ='http//localhost:3000';
   getUser() {
      return this.http.get(`${this.url}/users`);
   }

   createUser(data) {
    this.http.post(`${this.url}/users`, data).subscribe(
      res => {
        console.log(res);
        this.toastr.success('Utilisateur créer avec succès.', 'Success');
        this.router.navigateByUrl('/user');
      },
      err => {
        console.log('Error occured:' , err);
        this.toastr.error(err.message, 'Error occured');
      }
    );
   }

   }
}
