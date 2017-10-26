import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-popup-window',
  templateUrl: './popup-window.component.html',
  styleUrls: ['./popup-window.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupWindowComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  isOpen = false;

  @Input()
  title = "Title";

  @Output()
  onClose = new EventEmitter<string>();

  ngOnInit() {
    console.log('NG ON INIT');
  }

  ngOnChanges() {
    console.log("NG ON CHANGES")
  }

  ngOnDestroy() {
    console.log("NG ON DESTROY")
  }

  closePopup() {
    this.isOpen = false;
    this.onClose.emit('Pop-up window closed');
  }

}
