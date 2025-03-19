import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'daden-input-type',
  imports: [],
  templateUrl: './daden-input-type.component.html'
})
export class DadenInputTypeComponent {
  @Input() id: string = 'file-upload';
  @Input() accept: string = 'image/*';
  @Input() type: string = 'file'; // Default type if none provided
  @Input() disabled: boolean = false;
  @Output() fileChange = new EventEmitter<{ event: Event, type: string }>();

  onFileChange(event: Event) {
    this.fileChange.emit({ event, type: this.type });
  }
}
