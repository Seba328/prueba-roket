import { Component, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-mapcomponent',
  standalone: true,
  templateUrl: './mapcomponent.component.html',
  styleUrls: ['./mapcomponent.component.css']
})
export class MapcomponentComponent implements AfterViewInit, OnChanges {
  @Input() lat!: number;
  @Input() lng!: number;
  private map!: any;
  private marker!: any;


  // Se inicializa el mapa y el marcador
  ngAfterViewInit(): void {
    this.initMap();
  }


  // Se actualiza el mapa y el marcador
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['lat'] || changes['lng']) {
      this.updateMap();
    }
  }
  
  // Se inicializa el mapa
  private initMap(): void {
    if (typeof window !== 'undefined') {
      import('leaflet').then(L => {
        if (!this.map) {
          this.map = L.map('map', {
            center: [this['lat'], this['lng']],
            zoom: 13,
          });
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
          }).addTo(this.map);
          this.marker = L.marker([this['lat'], this['lng']]).addTo(this.map);
        }
      });
    }
  }
  
  // Se actualiza el mapa
  private updateMap(): void {
    if (this.map) {
      this.map.setView([this['lat'], this['lng']]);
      this.marker.setLatLng([this['lat'], this['lng']]);
    }
  }
  
  
}
