import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  ProgressModule,
  NavbarModule,
  AlertModule,
  ModalModule,
  TableModule, 
  UtilitiesModule,
  BadgeModule,
  NavModule, 
  TabsModule,
} from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { WidgetsModule } from "../../widgets/widgets.module";

// import { WidgetsRoutingModule } from './widgets-routing.module';
import { DeviceInfoComponent } from './device-info.component';

@NgModule({
  declarations: [
    DeviceInfoComponent,
  ],
  imports: [  
      CardModule,
      AlertModule,
      CommonModule,
      GridModule,
      ProgressModule,
      FormModule,
      ButtonModule,
      ButtonGroupModule,
      ChartjsModule,
      WidgetsModule,
      NavbarModule,
      ModalModule,
      TableModule, 
      UtilitiesModule,
      BadgeModule,
      NavModule, 
      TabsModule,
  ],
  exports: [
    DeviceInfoComponent,
  ]
})
export class DeviceInfoModule {
}
