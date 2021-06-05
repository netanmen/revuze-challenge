import { UserFilters } from './../../services/user-filters.interface.ts';
import { UsersService } from './../../services/users-service.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent {
    constructor(public usersService: UsersService) { }

    public applyFilters(filters: UserFilters): void {
        this.usersService.applyFilters(filters);
    }

    public selectUser(id: string): void {
        this.usersService.updateCurrentUser(id);
    }

}
