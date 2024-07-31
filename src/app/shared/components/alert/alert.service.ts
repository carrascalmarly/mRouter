import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {AlertInterface} from "./alert.interface";

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor() { }

    private data = new BehaviorSubject<AlertInterface>({message: '', show: false});

    data$: Observable<AlertInterface> = this.data.asObservable();

    private delay = 5000;

    toggleAlert(alert: AlertInterface) {
        if (alert.delay) {
            this.delay = alert.delay;
        }else{
            alert.delay = this.delay;
        }

        this.data.next(alert);

        if (alert.show) {
            setTimeout(() => {
               this.close()
            }, alert.delay);
        }
    }

    success(alert: AlertInterface){
        alert.bgColor = 'bg-success';
        alert.textColor = 'text-white';
        alert.icon = 'fas fa-check-circle';
        this.toggleAlert(alert);
    }

    error(alert: AlertInterface){
        alert.bgColor = 'bg-danger';
        alert.textColor = 'text-white';
        alert.icon = 'fas fa-exclamation-circle';
        this.toggleAlert(alert);
    }

    warning(alert: AlertInterface){
        alert.bgColor = 'bg-warning';
        alert.textColor = 'text-white';
        alert.icon = 'fas fa-exclamation-triangle';
        this.toggleAlert(alert);
    }
    
    private close(){
        this.data.next({message: '', show: false});
    }


}
 