import { Component } from '@angular/core';


@Component({
  selector: 'app-sky-viewer',
  imports: [],
  templateUrl: './sky-viewer.component.html',
  styleUrl: './sky-viewer.component.scss'
})
export class SkyViewerComponent {

  ngAfterViewInit() {
    var planetarium;


    // planetarium = S.virtualsky({
    //   id: 'starmap'	// This should match the ID used in the DOM
    // });

  }

}