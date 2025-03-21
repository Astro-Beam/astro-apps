import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-stellarium',
  imports: [],
  templateUrl: './stellarium.component.html',
  styleUrl: './stellarium.component.scss'
})

export class StellariumComponent {

    constructor(
      private titleService: Title,
    ){
      this.titleService.setTitle("ASTRO Applications - Waveform Fitter")
    }

}
