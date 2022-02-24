import { Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import Tale from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Tile from 'ol/layer/Tile';
import View from 'ol/View';
import { fromLonLat, toLonLat,transform } from 'ol/proj';
import Overlay from 'ol/Overlay';
import { toStringHDMS } from 'ol/coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
map:Map;
xCoordinate:number;
yCoordinate:number;
  constructor() { }

  ngOnInit(): void {
    this.initilizeMap();
  }

  initilizeMap(){
    this.map = new Map({
      target: 'map',
      layers: [new Tile({source: new OSM()})],
      view: new View({center: [3633693.5014097732, 4844188.394682496], zoom: 4})
    });
  
  }
}