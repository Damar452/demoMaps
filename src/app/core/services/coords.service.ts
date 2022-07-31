import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoordsService {

  constructor() { }

  public async getLocation(){
    const pos: any = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    return { lat: pos.coords.latitude, lng: pos.coords.longitude };
  }

}
