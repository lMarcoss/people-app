import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dataSource;
  categories;
  displayedColumns;
  constructor() {
    this.dataSource = [
      {position: 0, title: 'Post One', category: 'Web Development', date_posted: 'date', body: 'Body 1'},
      {position: 1, title: 'Post Two', category: 'Android Development', date_posted: 'date', body: 'Body 2'},
      {position: 2, title: 'Post Three', category: 'IOS Development', date_posted: 'date', body: 'Body 3'},
      {position: 3, title: 'Post Four', category: 'Android Development', date_posted: 'date', body: 'Body 4'},
      {position: 4, title: 'Post Five', category: 'IOS Development', date_posted: 'date', body: 'Body 5'},
      {position: 5, title: 'Post Six', category: 'Web Development', date_posted: 'date', body: 'Body 6'},
    ];
    this.categories = [
      {value: 'Web-Development', viewValue: 'Web Development'},
      {value: 'Android-Development', viewValue: 'Android Development'},
      {value: 'IOS-Development', viewValue: 'IOS Development'}
    ];

    this.displayedColumns = ['date_posted', 'title', 'category', 'delete'];
  }

  ngOnInit() {
    console.log('Home app');
  }

}


export interface Post {
  title: string;
  category: string;
  date_posted: string;
  position: number;
  body: string;
}
