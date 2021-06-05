import { User } from '../models/user.interface';
import { UserFilters } from './user-filters.interface.ts';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, pairwise, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    public userList$ = new BehaviorSubject<User[]>([]);
    public currentUser$ = new BehaviorSubject<User>(null);

    private filters$ = new BehaviorSubject<UserFilters>({
        startMonth: "1",
        endMonth: "3",
        name: "",
    });
    private apiBaseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
        this.filters$
            .pipe(
                distinctUntilChanged(),
                tap(currentFilters => this.updateUserList(currentFilters)),
                pairwise(),
            )
            .subscribe(([prevFilters, currentFilters]) => {
                if (prevFilters && currentFilters.startMonth !== prevFilters.startMonth && currentFilters.endMonth !== prevFilters.endMonth) {
                    this.currentUser$.next(null);
                }

                this.updateUserList(currentFilters)
            });
    }

    public applyFilters(filters: UserFilters): void {
        const currentFilters = this.filters$.getValue();

        this.filters$.next({ ...currentFilters, ...filters });
    }

    public updateCurrentUser(id: string): void {
        this.http.get<User>(`${this.apiBaseUrl}/users/${id}`)
            .subscribe(user => {
                this.currentUser$.next(user);
            });
    }

    private updateUserList(filters: UserFilters = null): void {
        this.http.get<User[]>(`${this.apiBaseUrl}/users`, {
            params: filters && {
                startMonth: filters.startMonth,
                endMonth: filters.endMonth,
                name: filters.name,
            }
        })
            .subscribe(users => {
                this.userList$.next(users);
            });
    }
}
