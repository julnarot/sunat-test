import {Component, OnInit} from '@angular/core';
import {ApiService} from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sunat-app';
  token: any;
  id: string = '';
  clave: string = '';

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {

  }
  callService() {
    this.apiService.generateTokenSunat(this.id, this.clave).subscribe(
      r => {
        this.token = r
      }, error => {
        this.token = error
      }
    )
  }
}
