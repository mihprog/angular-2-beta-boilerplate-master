import {Component} from "angular2/core";
//import {GoogleMapService} from "./google-map.service";
//import {Place} from "./place";
import {OnInit} from "angular2/core";

@Component({
  selector: "google-map",
  template:`
  <div>
  <h1>Map</h1>
  <div id="map"></div>

  <!--испытание сервиса - вывод всех мест
  <div id="dropdownDiv">
  <a class='dropdown-button btn' href='#' data-activates='dropdownPlaces'>Drop Me!</a>
  <ul id='dropdownPlaces' class='dropdown-content'>
      <li *ngFor="#place of places">
      {{place.id}} {{place.name}} {{place.position}}
      </li>
  </ul>
  </div>-->

  </div>
  `,
  styleUrls:["src/css/googleMap.css"],
  //providers:[GoogleMapService]
})
export class GoogleMapComponent implements OnInit{

  //public places:Place[];
  //constructor(private _GoogleMapService:GoogleMapService){}

  //магия
  //getPlaces(){
  //  this._GoogleMapService.getPlaces().then((places:Place[])=>this.places = places);
  //}
  //при подгрузке компонента - инициализируем карту и ставим маркер
  ngOnInit(position = {lat: 49.98213702119025, lng: 36.327667236328125}):any{
      //this.getPlaces();
      this.initMap();
      this.setMarker(position);
  }
  //метод для установки маркера по координатам
  setMarker(position:Object){
    marker = new google.maps.Marker({
      position: position,
      map: map
    });
  }
  //инициализируем гугл-карту и отображаем ее в блоке #map
   initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 50, lng: 36.3},
      zoom: 10
    });
     //добавление маркера и его перемещение по клику
    google.maps.event.addListener(map, 'click', function (event) {
      if ( marker ) {
        marker.setPosition(event.latLng);
        //log marker position
        console.log(event.latLng);
      } else {
        marker = new google.maps.Marker({
          position: event.latLng,
          map: map
        });
        //log marker position
        console.log(event.latLng);
      }
    });
   }
      //GoogleMapComponent.placeMarker(event.latLng);
      //  marker = new google.maps.Marker({
      //    position: event.latLng,
      //    map: map,
      //    title: event.latLng+"",
      //    zIndex: 999,
      //  });
      //
      //  markers.push(marker);
      //markers[0]= null;
    //  var infoWindow = new google.maps.InfoWindow({
    //    content: 'Latitude: ' + location.lat() + '<br />Longitude: ' + location.lng()
    //});
    //  var lat =location.lat();
    //  var lng =location.lng();
    //  for (var i = 0; i < markers.length; i++) {
    //    markers[i].setMap(null);
    //  }
    //  marker = new google.maps.Marker({
    //    position: {lat: lat, lng: lng},
    //    map: map
    //});
    //  markers.push(marker);



  //removeMarker(position){
  //    for(var i = 0;i<markers.length;i++){
  //      if(position==marker[i].position){
  //        markers[i].setMap(null);
  //        markers[i]=null;
  //        break;
  //      }
  //    }
  //}

}
