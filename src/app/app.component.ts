import { Component, OnInit } from '@angular/core';
import { GeoService } from './geo-service.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  location: Observable<any>;
  constructor(private geoService: GeoService) {}
  name = 'Angular 6';
  ngOnInit() {
    this.location = this.geoService.geoLocation$.pipe(tap(console.log));
    this.geoService.getUserLocation();

    
  }
}
