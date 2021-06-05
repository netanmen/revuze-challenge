import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-quarter-buttons-section',
    templateUrl: './quarter-buttons-section.component.html',
    styleUrls: ['./quarter-buttons-section.component.scss']
})
export class QuarterButtonsSectionComponent {
    @Output() buttonClicked = new EventEmitter<{}>();

    public quarters = [
        {
            name: 'Q1',
            startMonth: "1",
            endMonth: "3"
        },
        {
            name: 'Q2',
            startMonth: "4",
            endMonth: "6"
        },
        {
            name: 'Q3',
            startMonth: "7",
            endMonth: "9"
        },
        {
            name: 'Q4',
            startMonth: "10",
            endMonth: "12"
        },
    ];

    public handleClick(startMonth: number, endMonth: number ): void {
        this.buttonClicked.emit({startMonth, endMonth});
    }
}
