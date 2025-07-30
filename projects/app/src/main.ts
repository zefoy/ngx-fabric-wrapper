import { bootstrapApplication } from "@angular/platform-browser";

import { FabricConfigInterface, FABRIC_CONFIG } from "ngx-fabric-wrapper";

import { AppComponent } from "./app/app.component";

const DEFAULT_FABRIC_CONFIG: FabricConfigInterface = {
  allowTouchScrolling: true,
};

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: FABRIC_CONFIG,
      useValue: DEFAULT_FABRIC_CONFIG,
    },
  ],
});
