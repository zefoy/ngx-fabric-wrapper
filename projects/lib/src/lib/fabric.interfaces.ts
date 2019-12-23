import { InjectionToken } from '@angular/core';

export const FABRIC_CONFIG = new InjectionToken<FabricConfigInterface>('FABRIC_CONFIG');

export type FabricEvent = 'drop' | 'dragover' | 'dragenter' | 'dragleave' | 'mouseup' |
  'mousedown' | 'mouseover' | 'mouseout' | 'mousemove' | 'mousewheel' | 'mousedblclick' |
  'mouseupBefore' | 'mousedownBefore' | 'mousemoveBefore' | 'mouseUp' | 'mouseDown' |
  'mouseOver' | 'mouseOut' | 'mouseMove' | 'mouseDblclick' | 'mouseUpBefore' | 'mouseDownBefore' |
  'mouseMoveBefore' | 'pathCreated' | 'alterRender' | 'objectAdded' | 'objectMoved' | 'objectScaled' |
  'objectSkewed' | 'objectRotated' | 'objectRemoved' | 'objectModified' | 'objectSelected' |
  'objectMoving' | 'objectScaling' | 'objectSkewing' | 'objectRotating' | 'selectionCleared' |
  'selectionCreated' | 'selectionUpdated' | 'beforeTransform' | 'beforeSelectionCleared';

export const FabricEvents: FabricEvent[] = [
  'drop',
  'dragover',
  'dragenter',
  'dragleave',

  'mouseup',
  'mousedown',
  'mouseover',
  'mouseout',
  'mousemove',
  'mousewheel',
  'mousedblclick',
  'mouseupBefore',
  'mousedownBefore',
  'mousemoveBefore',

  'mouseUp',
  'mouseDown',
  'mouseOver',
  'mouseOut',
  'mouseMove',
  'mouseDblclick',
  'mouseUpBefore',
  'mouseDownBefore',
  'mouseMoveBefore',

  'pathCreated',
  'alterRender',

  'objectAdded',
  'objectMoved',
  'objectScaled',
  'objectSkewed',
  'objectRotated',
  'objectRemoved',
  'objectModified',
  'objectSelected',
  'objectMoving',
  'objectScaling',
  'objectSkewing',
  'objectRotating',

  'selectionCleared',
  'selectionCreated',
  'selectionUpdated',

  'beforeTransform',
  'beforeSelectionCleared'
];

export interface FabricConfigInterface {
  allowTouchScrolling?: boolean,
  altActionKey?: string,
  altSelectionKey?: string,
  backgroundColor?: string | any,
  backgroundImage?: any,
  backgroundVpt?: boolean,
  centeredKey?: string,
  centeredRotation?: boolean,
  centeredScaling?: boolean,
  clipTo?: FabricClipToFunction,
  containerClass?: string,
  controlsAboveOverlay?: boolean,
  defaultCursor?: string,
  enableRetinaScaling?: boolean,
  fireMiddleClick?: boolean,
  fireRightClick?: boolean,
  freeDrawingCursor?: string,
  FX_DURATION?: number,
  hoverCursor?: string,
  imageSmoothingEnabled?: boolean,
  includeDefaultValues?: boolean,
  interactive?: boolean,
  isDrawingMode?: boolean,
  moveCursor?: string,
  notAllowedCursor?: string,
  overlayColor?: string | any,
  overlayImage?: any,
  overlayVpt?: boolean,
  perPixelTargetFind?: boolean,
  preserveObjectStacking?: boolean,
  renderOnAddRemove?: boolean,
  rotationCursor?: string,
  selection?: boolean,
  selectionBorderColor?: string,
  selectionColor?: string,
  selectionDashArray?: any[],
  selectionKey?: string,
  selectionLineWidth?: number,
  skipOffscreen?: boolean,
  skipTargetFind?: boolean,
  snapAngle?: number,
  snapThreshold?: number,
  stateful?: boolean,
  stopContextMenu?: boolean,
  svgViewportTransformation?: boolean,
  targetFindToTolerance?: number,
  uniScaleKey?: string,
  uniScaleTransform?: boolean,
  viewportTransform?: any[],
  vptCoords?: any
}

export class FabricConfig implements FabricConfigInterface {
  allowTouchScrolling?: boolean;
  altActionKey?: string;
  altSelectionKey?: string;
  backgroundColor?: string | any;
  backgroundImage?: any;
  backgroundVpt?: boolean;
  centeredKey?: string;
  centeredRotation?: boolean;
  centeredScaling?: boolean;
  clipTo?: FabricClipToFunction;
  containerClass?: string;
  controlsAboveOverlay?: boolean;
  defaultCursor?: string;
  enableRetinaScaling?: boolean;
  fireMiddleClick?: boolean;
  fireRightClick?: boolean;
  freeDrawingCursor?: string;
  FX_DURATION?: number;
  hoverCursor?: string;
  imageSmoothingEnabled?: boolean;
  includeDefaultValues?: boolean;
  interactive?: boolean;
  isDrawingMode?: boolean;
  moveCursor?: string;
  notAllowedCursor?: string;
  overlayColor: string | any;
  overlayImage: any;
  overlayVpt?: boolean;
  perPixelTargetFind?: boolean;
  preserveObjectStacking?: boolean;
  renderOnAddRemove?: boolean;
  rotationCursor?: string;
  selection?: boolean;
  selectionBorderColor?: string;
  selectionColor?: string;
  selectionDashArray?: any[];
  selectionKey?: string;
  selectionLineWidth?: number;
  skipOffscreen?: boolean;
  skipTargetFind?: boolean;
  snapAngle?: number;
  snapThreshold?: number;
  stateful?: boolean;
  stopContextMenu?: boolean;
  svgViewportTransformation?: boolean;
  targetFindToTolerance?: number;
  uniScaleKey?: string;
  uniScaleTransform?: boolean;
  viewportTransform?: any[];
  vptCoords?: any;

  constructor(config: FabricConfigInterface = {}) {
    this.assign(config);
  }

  assign(config: FabricConfigInterface = {}) {
    for (const key in config) {
      this[key as keyof FabricConfig] = config[key as keyof FabricConfigInterface] as never;
    }
  }
}

export type FabricClipToFunction = (ctx: any) => void;
