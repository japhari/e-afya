import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css'],
})
export class PublicComponent implements OnInit {
  val: any;
  constructor() {}

  ngOnInit(): void {
    console.log('Public');
  }
}
