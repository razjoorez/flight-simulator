import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import * as CANNON from 'cannon';
import { windowWhen } from 'rxjs';
@Component({
  selector: 'app-flight-sim',
  templateUrl: './flight-sim.component.html',
  styleUrls: ['./flight-sim.component.scss']
})
export class FlightSimComponent implements OnInit {
  @ViewChild('renderCanvas', {static:true})rendererCanvas!: ElementRef;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private airplane!:THREE.Mesh;
  private world!: CANNON.World;


  ngOnInit(): void {

    this.initScene();
    this.initPhysiscs();



  }


  private initScene(): void{
    //Scene setup
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB); //Blue Sky

    //Camera setup

    this.camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
    this.camera.position.set(0,5,10);

    //Render setup

    this.renderer = new THREE.WebGLRenderer({canvas: this.rendererCanvas.nativeElement});
    this.renderer.setSize(window.innerWidth,window.innerHeight);


  }

  private initPhysiscs(): void{
    this.world = new CANNON.World(); 
    this.world.gravity.set(0, -9.82, 0);  //Earth gravity
  }

  private createAirPlane(): void {
    const geometry = new THREE.BoxGeometry(2,0.5,3);
    
  }


}
