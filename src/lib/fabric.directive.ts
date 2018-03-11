import { fabric as Fabric } from 'fabric';

import ResizeObserver from 'resize-observer-polyfill';

import { Directive, Optional, Inject,
  OnInit, OnDestroy, DoCheck, OnChanges,
  Input, Output, EventEmitter, NgZone, ElementRef,
  KeyValueDiffer, KeyValueDiffers, SimpleChanges } from '@angular/core';

import { FABRIC_CONFIG } from './fabric.interfaces';

import { FabricEvents, FabricConfig, FabricConfigInterface } from './fabric.interfaces';

@Directive({
  selector: '[fabric]',
  exportAs: 'ngxFabric'
})
export class FabricDirective implements OnInit, OnDestroy, DoCheck, OnChanges {
  private ro: any = null;
  private instance: any = null;

  private objectsJSON: any = null;

  private initialZoom: number = null;
  private initialWidth: number = null;
  private initialHeight: number = null;

  private configDiff: KeyValueDiffer<string, any>;

  @Input()
  set zoom(zoom: number) {
    this.setZoom(zoom);
  }

  @Input()
  set width(width: number) {
    this.setWidth(width);
  }
  @Input()
  set height(height: number) {
    this.setHeight(height);
  }

  @Input() disabled: boolean = false;

  @Input('fabric') config: FabricConfigInterface;

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

  @Output() selectionCleared = new EventEmitter<any>();
  @Output() selectionCreated = new EventEmitter<any>();
  @Output() selectionUpdated = new EventEmitter<any>();
  @Output() beforeSelectionCleared = new EventEmitter<any>();

  constructor(private zone: NgZone,
    private elementRef: ElementRef, private differs: KeyValueDiffers,
    @Optional() @Inject(FABRIC_CONFIG) private defaults: FabricConfigInterface) {}

  ngOnInit(): void {
    const params = new FabricConfig(this.defaults);

    params.assign(this.config); // Custom configuration

    this.zone.runOutsideAngular(() => {
      if (!this.disabled) {
        this.instance = new Fabric.Canvas(this.elementRef.nativeElement, params);
      } else {
        this.instance = new Fabric.StaticCanvas(this.elementRef.nativeElement, params);
      }

      if (this.initialZoom) {
        this.setZoom(this.initialZoom);
      }

      if (this.initialWidth) {
        this.setWidth(this.initialWidth);
      }

      if (this.initialHeight) {
        this.setHeight(this.initialHeight);
      }

      if (this.objectsJSON !== null) {
        this.loadFromJSON(this.objectsJSON);
      }
    });

    // Add native Fabric event handling
    FabricEvents.forEach((eventName: string) => {
      const fabricEvent = eventName.replace(/([A-Z])/g, (c) => `:${c.toLowerCase()}`);

      this.instance.on(fabricEvent, (event) => {
        this.zone.run(() => {
          this[eventName].emit(event);
        });
      });
    });

    if (!this.configDiff) {
      this.configDiff = this.differs.find(this.config || {}).create();

      this.configDiff.diff(this.config || {});
    }

    this.zone.runOutsideAngular(() => {
      this.ro = new ResizeObserver((entries, observer) => {
        const element = this.elementRef.nativeElement.parentElement.parentElement;

        if (!this.initialWidth) {
          this.setWidth(element.offsetWidth);
        }

        if (!this.initialHeight) {
          this.setHeight(element.offsetHeight);
        }
      });

      this.ro.observe(this.elementRef.nativeElement.parentElement.parentElement);
    });
  }

  ngOnDestroy(): void {
    if (this.ro) {
      this.ro.disconnect();
    }

    if (this.instance) {
      this.objectsJSON = this.instance.toJSON();

      this.instance.dispose();

      delete this.instance;

      this.instance = null;
    }
  }

  ngDoCheck(): void {
    if (this.configDiff) {
      const changes = this.configDiff.diff(this.config || {});

      if (changes) {
        this.ngOnDestroy();

        this.ngOnInit();
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instance && changes['disabled']) {
      if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
        this.ngOnDestroy();

        this.ngOnInit();
      }
    }
  }

  public fabric(): any {
    return this.instance;
  }

  public clear(): void {
    if (this.instance) {
      this.instance.clear();
    }
  }

  public render(): void {
    if (this.instance) {
      this.instance.renderAll();
    }
  }

  public setZoom(zoom: number): void {
    this.initialZoom = zoom;

    if (this.instance) {
      this.instance.setZoom(zoom);
    }
  }

  public setWidth(width: number): void {
    this.initialWidth = width;

    if (this.instance) {
      this.instance.setWidth(width);
    }
  }

  public setHeight(height: number): void {
    this.initialHeight = height;

    if (this.instance) {
      this.instance.setHeight(height);
    }
  }

  public loadFromJSON(json: any, callback?: Function, reviverOpt?: any): void {
    if (this.instance) {
      this.instance.loadFromJSON(json, () => {
        let renderAll = true;

        if (callback) {
          renderAll = callback();
        }

        if (renderAll) {
          this.instance.renderAll();
        }
      }, reviverOpt);
    }
  }
}
