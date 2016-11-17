import {Component} from 'angular2/core';
import {GoogleMapComponent} from "./google-map/google-map.component";

@Component({
    selector: 'my-app',
    template: `
        <google-map></google-map>
    `,
  directives:[GoogleMapComponent]
})
export class AppComponent {

}
