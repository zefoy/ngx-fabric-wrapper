# Angular Fabric Wrapper

<a href="https://badge.fury.io/js/ngx-fabric-wrapper"><img src="https://badge.fury.io/js/ngx-fabric-wrapper.svg" align="right" alt="npm version" height="18"></a>

This is an Angular wrapper library for the [Fabric](http://fabricjs.com/). To use this library you should get familiar with the Fabric documentation as well since this documentation only explains details specific to this wrapper.

### Quick links

[Example application](https://zefoy.github.io/ngx-fabric-wrapper/)
 | 
[Plunker template](http://plnkr.co/edit/NV8turYQr6iMwNG58DBk?p=preview)
 | 
[Fabric documentation](http://fabricjs.com/docs/)

### Building the library

```bash
npm install
npm start
```

### Running the example

```bash
cd example
npm install
npm start
```

### Library development

```bash
npm link
cd example
npm link ngx-fabric-wrapper
```

### Installing and usage

```bash
npm install ngx-fabric-wrapper --save --no-optional
```

##### Load the module for your app (with global configuration):

Providing the global configuration is optional and when used you should only provide the configuration in your root module.

```javascript
import { FabricModule } from 'ngx-fabric-wrapper';
import { FABRIC_CONFIG } from 'ngx-fabric-wrapper';
import { FabricConfigInterface } from 'ngx-fabric-wrapper';

const DEFAULT_FABRIC_CONFIG: FabricConfigInterface = {
};

@NgModule({
  ...
  imports: [
    ...
    FabricModule
  ],
  providers: [
    {
      provide: FABRIC_CONFIG,
      useValue: DEFAULT_FABRIC_CONFIG
    }
  ]
})
```

##### Use it in your HTML template (with custom configuration):

This library provides two ways to create a Fabric canvas, component for simple use cases and directive for more custom use cases.

**COMPONENT USAGE**

Simply replace the canvas that would ordinarily be passed to `Fabric` with the fabric component.

```html
<fabric [config]="config" [data]="json"></fabric>
```

```javascript
[config]                     // Custom config to override the global defaults.

[data]                       // JSON data to be loaded on the Fabric canvas.

[zoom]                       // Zoom level for the Fabric canvas (Default: 1).

[width]                      // Width of the canvas (Default: parents width).
[height]                     // Height of the canvas (Default: parents height).

[disabled]                   // Disables all functionality (uses static canvas).

[useFabricClass]             // Use fabric class (use provided default styles).

(dataLoaded)                 // Event for when provided data is loaded to the canvas.

(<fabricEvent>)              // All Fabric canvas events / callbacks work as bindings.
                             // Event names are in camel case (not colon separated).
                             // Example: object:added -> objectAdded

```

**DIRECTIVE USAGE**

Fabric directive can be used in correctly structured canvas element with optional custom configuration:

```html
<canvas class="fabric" [fabric]="config"></canvas>
```

```javascript
[fabric]                     // Custom config to override the global defaults.

[zoom]                       // Zoom level for the Fabric canvas (Default: 1).

[width]                      // Width of the canvas (Default: parents width).
[height]                     // Height of the canvas (Default: parents height).

[disabled]                   // Disables all functionality (focus & editing).

(<fabricEvent>)              // All Fabric canvas events / callbacks work as bindings.
                             // Event names are in camel case (not colon separated).
                             // Example: object:added -> objectAdded
```

##### Available configuration options (custom / global configuration):

```javascript
selectionColor               // Color for the selection indicators.

renderOnAddRemove            // Render automatically on objects add / removal.
```

For more detailed documentation with all the supported config options see the Fabric documentation.

##### Available control / helper functions (provided by the directive):

```javascript
fabric()                          // Returns the Fabric canvas reference for full API access.

clear()                           // Clears all contexts (background, main, top) of an instance.

setZoom(zoom)                     // Sets the zoom level of the canvas (less than 1 zooms out).
setWidth(width)                   // Sets canvas width (when null then parent width is used).
setHeight(height)                 // Sets canvas height (when null then parent height is used).

loadFromJSON(json, cb?, opts?)    // Populates canvas from json (callback called when finished).
```

Above functions can be accessed through the directive reference (available as directiveRef in the component).
