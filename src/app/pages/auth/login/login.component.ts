import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AlertService } from '../../../shared/components/alert/alert.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterLinkActive,RouterLink,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup =this.fb.group({})

  constructor(private fb: FormBuilder, private router:Router, private alertService:AlertService){
    this.initFormLogin();
  }
  initFormLogin(){
    this.loginForm= this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  onSubmit(){
    console.log(this.loginForm.value)
    this.alertService.error({message:'valide usuario y/o contraseña',show:true})

    /*
    if(this.loginForm.valid){
      localStorage.setItem("login","true")
      this.router.navigate(['/dashboard/blog/list']).then();
    }else{
      this.alertService.error({message:'valide usuario y/o contraseña',show:true})

  }*/
  }
}
