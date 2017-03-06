import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  user;
  constructor(private route: ActivatedRoute,
  				private router: Router, 
  				private http: Http
  			) { }

  ngOnInit() {
  	const id = this.route.snapshot.params['id'];
    const apiToken = document.querySelector('[data-api-token]').getAttribute('data-api-token');

  	const headers = new Headers({ 'Authorization': `Bearer ${apiToken}` });
  	const options = new RequestOptions({ headers: headers });

  	this.user = this.http.get(`/api/second/${id}`, options)
  		.map(res => res.json());
  }

}
