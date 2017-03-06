import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  users;

  constructor(private route: ActivatedRoute,
  				private router: Router, 
  				private http: Http) { }


  ngOnInit() {
    this.users = this.http.get('/api/first')
      .map(res => res.json());
  }

}
