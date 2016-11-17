import {Injectable} from "angular2/core";
import {PLACES} from "./mock.places";

@Injectable()

export class GoogleMapService{
    getPlaces(){
      return Promise.resolve(PLACES);
    }
}
