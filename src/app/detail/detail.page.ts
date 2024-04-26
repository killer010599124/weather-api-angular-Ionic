import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  responseData: any;
  constructor() { }

  ngOnInit() {
    this.responseData = history.state.data;
    console.log('Response data:', this.responseData);
    // Use the response data in your detail page
  }

}
