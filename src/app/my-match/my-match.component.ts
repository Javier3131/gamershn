import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tt-match',
  templateUrl: './my-match.component.html',
  styleUrls: ['./my-match.component.scss'],
})
export class MyMatchComponent implements OnInit {
  @Input() match: any;

  constructor() {}

  ngOnInit() {}
}
