import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FabricModule, FabricConfigInterface, FABRIC_CONFIG } from 'ngx-fabric-wrapper';

import { AppComponent } from './app.component';

const DEFAULT_FABRIC_CONFIG: FabricConfigInterface = {
  allowTouchScrolling: true
};

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    FabricModule,
    BrowserModule
  ],
  exports: [
  ],
  providers: [
    {
      provide: FABRIC_CONFIG,
      useValue: DEFAULT_FABRIC_CONFIG
    }
  ]
})
export class AppModule {}
