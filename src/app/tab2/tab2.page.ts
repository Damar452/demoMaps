import { Component, OnInit } from '@angular/core';
import * as  Mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { CoordsService } from '../core/services/coords.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public map: Mapboxgl.Map;
  private position: any[];

  constructor(private coordsService: CoordsService) { }

  async ngOnInit() {
    await this.getLocation();
    this.initMap();
  }

  private async getLocation(){
    const resp = await this.coordsService.getLocation();
    this.position = [resp.lng, resp.lat];
   }

  private initMap(){
    Mapboxgl.accessToken = environment.mapboxKey;
    this.map = new Mapboxgl.Map({
      container: 'mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.position,
      zoom: 15
    });

    this.createMarker();
  }

  private createMarker() {
    new Mapboxgl.Marker({
      draggable: true
    }).setLngLat(this.position)
      .addTo(this.map);
  }



}
