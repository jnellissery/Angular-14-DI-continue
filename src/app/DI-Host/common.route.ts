import { Routes } from '@angular/router';
import { ChildComponent } from '../DI-Host/child/child.component';
import { CommonService } from '../DI-Host/common.service';
import { GrandchildComponent } from '../DI-Host/grandchild/grandchild.component';
import { ParentComponent } from '../DI-Host/parent/parent.component';

export const routes: Routes = [
  {
    path: '',
    component: ParentComponent,
    children: [
      {
        path: 'child',
        component: ChildComponent,
      },
      {
        path: 'grandchild',
        component: GrandchildComponent,
      },
    ],
    providers: [CommonService],
  },
];
