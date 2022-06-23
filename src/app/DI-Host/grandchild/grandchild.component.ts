import { Component, Host, OnInit } from '@angular/core';
import { CommonService } from '../../DI-Host/common.service';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css'],
  standalone:true,
  

})
export class GrandchildComponent implements OnInit {
  randomnumber
  constructor(@Host() private svc:CommonService) { }

  ngOnInit() {
    this.randomnumber= this.svc.randomnumber;
  }

}