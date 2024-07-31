import { Component, OnInit } from '@angular/core';
import { AlertInterface } from './alert.interface';
import { AlertService } from './alert.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [NgIf,NgClass],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit{

  alertFlash: AlertInterface=({message:'',show:false});

  constructor(private alertService: AlertService){

  }

  ngOnInit(): void {
    this.alertService.data$.subscribe(alert =>{
      console.log(alert)
      this.alertFlash=alert;
      this.alertFlash.closable=true
      
    })
  }

  close(){
    this.alertService.toggleAlert({message:'',show:false})
  }
}
