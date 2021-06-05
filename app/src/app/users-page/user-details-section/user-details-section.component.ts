import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-user-details-section',
    templateUrl: './user-details-section.component.html',
    styleUrls: ['./user-details-section.component.scss']
})
export class UserDetailsSectionComponent {
    @Input() user: {};
}
