import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-user-list-section',
    templateUrl: './user-list-section.component.html',
    styleUrls: ['./user-list-section.component.scss']
})
export class UserListSectionComponent {
    @Input() users: object[];
    @Output() itemClicked = new EventEmitter<string>();

    public handleItemClick(id: string): void {
        this.itemClicked.emit(id);
    }
}
