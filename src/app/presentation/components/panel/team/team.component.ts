import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/domain/user.model';
import { GetUsersUseCase } from 'src/app/core/usecases/get-users.usecase';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  users: User[] = [];

  constructor(private getUsersUseCase: GetUsersUseCase) { }

  ngOnInit(): void {
    this.getUsersUseCase.execute({}).subscribe(users => this.users = users);
  }

}
