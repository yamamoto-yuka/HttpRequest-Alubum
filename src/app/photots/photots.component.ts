import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photos } from './photos.interface';

@Component({
  selector: 'photots',
  templateUrl: './photots.component.html',
  styleUrls: ['./photots.component.scss'],
})
export class PhototsComponent implements OnInit {
  url = 'https://jsonplaceholder.typicode.com/album/1/photos';
  photos: Photos[] = [];
  constructor(private http: HttpClient) {}

  CheckAriacurrent(index: number) {
    if (index === 0) return true;
    else return false;
  }

  ngOnInit(): void {
    this.http.get<Photos[]>(this.url).subscribe((resposnse) => {
      this.photos = resposnse;
    });
  }
}
