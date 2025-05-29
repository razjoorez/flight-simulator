import { Component } from '@angular/core';
import * as THREE from 'three';
import * as CANNON from 'cannon';
@Component({
  selector: 'app-flight-sim',
  templateUrl: './flight-sim.component.html',
  styleUrls: ['./flight-sim.component.scss']
})
export class FlightSimComponent {


  private scene!: THREE.Scene;
}
