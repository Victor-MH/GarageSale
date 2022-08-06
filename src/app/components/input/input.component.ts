import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() label: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() inpt_type: string = 'text';
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
