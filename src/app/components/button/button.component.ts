import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() text: string = "Click Me";
  @Input() color: string = '';
  @Input() fontColor: string = '';

  constructor() {

  }

  ngOnInit(): void {}
}
