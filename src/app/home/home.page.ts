import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  fileApiUrl = '';
  donnee: any;
  fileData = {
    title: '',
    description: '',
    fileUrl: ''
  };

  constructor(public http: HttpClient) {
    this.readAPI('http://127.0.0.1:8000/fichiers/').subscribe((data) => {
      console.log(data);
      this.donnee = data;

    });
  }

  readAPI(URL: string){
    return this.http.get(URL);
  }

}
