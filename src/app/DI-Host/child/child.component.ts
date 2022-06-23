import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../DI-Host/common.service';
import { GrandchildComponent } from '../../DI-Host/grandchild/grandchild.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  standalone: true,
  imports: [GrandchildComponent],
  viewProviders: [CommonService],
  providers:[CommonService],

})
export class ChildComponent implements OnInit {
  randomnumber;
  constructor(private svc: CommonService) {}

  ngOnInit() {
    this.randomnumber = this.svc.randomnumber;
  }
}
