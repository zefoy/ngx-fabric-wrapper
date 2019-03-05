import { Component,
  AfterViewInit, Input, Output, EventEmitter,
  ViewChild, HostBinding, ViewEncapsulation } from '@angular/core';

import { FabricDirective } from './fabric.directive';

import { FabricConfigInterface } from './fabric.interfaces';

@Component({
  selector: 'fabric',
  exportAs: 'ngxFabric',
  templateUrl: '../../dist/lib/fabric.component.html',
  styleUrls: [ '../../dist/lib/fabric.component.css' ],
  encapsulation: ViewEncapsulation.None
})
export class FabricComponent implements AfterViewInit {
  private json: any = null;

  @Input()
  set data(data: string) {
    this.setJSON(data);
  }

  @Input() zoom: number | null = null;

  @Input() width: number | null = null;
  @Input() height: number | null = null;

  @Input() disabled: boolean = false;

  @Input() config?: FabricConfigInterface;

  @HostBinding('class.fabric')
  @Input() useFabricClass: boolean = true;

  @Output() dataLoaded = new EventEmitter<any>();

  @Output() mouseUp = new EventEmitter<any>();
  @Output() mouseDown = new EventEmitter<any>();
  @Output() mouseOver = new EventEmitter<any>();
  @Output() mouseOut = new EventEmitter<any>();
  @Output() mouseMove = new EventEmitter<any>();
  @Output() mouseDblclick = new EventEmitter<any>();

  @Output() pathCreated = new EventEmitter<any>();

  @Output() objectAdded = new EventEmitter<any>();
  @Output() objectRemoved = new EventEmitter<any>();
  @Output() objectModified = new EventEmitter<any>();
  @Output() objectMoving = new EventEmitter<any>();
  @Output() objectScaling = new EventEmitter<any>();
  @Output() objectRotating = new EventEmitter<any>();
  @Output() objectSelected = new EventEmitter<any>();

  @Output() selectionCleared = new EventEmitter<any>();
  @Output() selectionCreated = new EventEmitter<any>();
  @Output() selectionUpdated = new EventEmitter<any>();
  @Output() beforeSelectionCleared = new EventEmitter<any>();

  @ViewChild(FabricDirective) directiveRef?: FabricDirective;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.json != null) {
      this.setJSON(this.json, true);
    }
  }

  private setJSON(json: string, force?: boolean): void {
    if (force || json !== this.json) {
      if (this.directiveRef) {
        this.directiveRef.loadFromJSON(json, () => {
          if (this.directiveRef && this.directiveRef.fabric()) {
            this.dataLoaded.emit(this.directiveRef.fabric());
          }
        });
      }

      this.json = json;
    }
  }
}
