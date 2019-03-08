import { AlertifyService } from './../../../_services/alertify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  constructor(private alertify: AlertifyService) {}

  ngOnInit() {}
  click() {
    this.alertify.success('Click');
  }
}
