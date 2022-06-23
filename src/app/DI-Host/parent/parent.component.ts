import { Component, OnInit } from '@angular/core';
import { ChildComponent } from '../../DI-Host/child/child.component';
import { CommonService } from '../../DI-Host/common.service';
import { GrandchildComponent } from '../../DI-Host/grandchild/grandchild.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  standalone: true,
  imports: [ChildComponent, GrandchildComponent],
})
export class ParentComponent implements OnInit {
  randomnumber;
  constructor(private svc: CommonService) {}
 
  ngOnInit() {
    this.randomnumber = this.svc.randomnumber;
  }
}
