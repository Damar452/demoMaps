import { Component, OnInit } from '@angular/core';
import { CoordsService } from '../core/services/coords.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public title = 'Google Map';

  public position: any;

  public label = {
    color: 'white',
    text: 'Marcador'
  };

  constructor(private coordsService: CoordsService) {}

  ngOnInit() {
    this.getLocation();
  }

  private async getLocation(){
    this.position = await this.coordsService.getLocation();
  }



}
