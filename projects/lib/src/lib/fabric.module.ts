import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricComponent } from './fabric.component';
import { FabricDirective } from './fabric.directive';

@NgModule({
  declarations: [ FabricComponent, FabricDirective ],
  imports: [ CommonModule ],
  exports: [ CommonModule, FabricComponent, FabricDirective ],
  providers: []
})
export class FabricModule {
}
