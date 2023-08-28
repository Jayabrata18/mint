import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  constructor(private httpClient: HttpClient) { }
  emailId : string = "";
  url : string = "ADD_SCRIPT_URL_HERE";
  emailEntry(){
    console.log(this.emailId);
    let params = new HttpParams().set("email",this.emailId);
    this.httpClient.get(this.url,{ params : params}).subscribe((res) => {
      console.log(res);
    });
  }

}
