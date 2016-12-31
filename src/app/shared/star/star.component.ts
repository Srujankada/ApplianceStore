import { Component, OnChanges, Input,
         Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ai-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
 @Input() rating: number;
 starWidth: number;

 @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

  constructor() { }

 ngOnChanges(): void {
        // Convert x out of 5 starts
        // to y out of 86px width
        this.starWidth = this.rating * 86 / 5;
    }

    onClick(): void {
        this.ratingClicked.emit(`******The rating ${this.rating} was clicked!*****`);
    }

}
