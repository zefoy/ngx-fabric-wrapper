import { fabric } from 'fabric';

import { Component, ViewChild } from '@angular/core';

import { FabricComponent, FabricDirective, FabricConfigInterface } from 'ngx-fabric-wrapper';

@Component({
  selector: 'my-app',
  moduleId: 'src/app/app.component',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ]
})
export class AppComponent {
  public show: boolean = true;

  public data: any = {
    objects: [
      {
        type: 'group',
        top: 22,
        left: 72,
        width: 200,
        height: 60,
        objects: [
          {
            type: 'rect',
            top: -30,
            left: -100,
            width: 200,
            height: 60,
            fill: '#cfcfcf'
          },
          {
            type: 'text',
            width: 200,
            height: 60,
            fontSize: 24,
            text: 'Example object',
            originX: 'center',
            originY: 'center'
          }
        ]
      }
    ]
  };

  public type: string = 'component';

  public disabled: boolean = false;

  public config: FabricConfigInterface = {
    renderOnAddRemove: true
  };

  @ViewChild(FabricComponent) componentRef: FabricComponent;
  @ViewChild(FabricDirective) directiveRef: FabricDirective;

  constructor() {}

  toggleType() {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  addLine() {
    const directiveRef = (this.type === 'directive') ?
      this.directiveRef : this.componentRef.directiveRef;

    const line = new fabric.Line([
      44, 100, 300, 100
    ], {
      fill: '#000000',
      stroke: '#000000',
      strokeWidth: 3
    });

    directiveRef.fabric().add(line);
  }

  addText() {
    const directiveRef = (this.type === 'directive') ?
      this.directiveRef : this.componentRef.directiveRef;

    const text = new fabric.Text('Angular', {
      top: 120,
      left: 105,
      fill: '#000000'
    });

    directiveRef.fabric().add(text);
  }

  addImage() {
    const directiveRef = (this.type === 'directive') ?
      this.directiveRef : this.componentRef.directiveRef;

    fabric.Image.fromURL('https://angular.io/assets/images/logos/angular/angular.png', function(image) {
      image.scale(0.5);

      image.set({ left: 110, top: 180 });

      directiveRef.fabric().add(image);
    });
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  resetCanvasObjects() {
    if (this.type === 'directive') {
      this.directiveRef.clear();
    } else if (this.type === 'component') {
      this.componentRef.directiveRef.clear();
    }

    this.data = Object.assign({}, this.data);
  }

  onDataLoaded(canvas: any) {
    console.log('Data loaded:', canvas);
  }

  onObjectAdded(event: any) {
    console.log('Object added:', event);
  }

  onSelectionCreated(event: any) {
    console.log('Selection created:', event);
  }
}
