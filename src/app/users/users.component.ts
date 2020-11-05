import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users$: Observable<User[]>;
  public  usersLoading: Observable<boolean>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.users$ = store
      .pipe(select(selectUserListEntitiesConverted$));

    this.usersLoading = store.pipe(select(selectUsersLoading$));
  }

  ngOnInit() {
    this.store.dispatch(new  UserListModule.LoadInitUsers());
  }

  goToAddUser () {
    this.router.navigateByUrl('/ajout-user');
  }

  deleteUser(id: number) {
    this.store.dispatch(new UserListModule.LoadDeleteUser(id));
  }

}
