import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {Injectable} from '@angular/core'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router : Router, private authservice:AuthService) { 
    
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
    
  }
  login(){
    this.authservice.currentUser = Object
    this.http.get<any>("http://localhost:3000/signupUsers")
    .subscribe(res =>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      
      const admin = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.email === "admin@gmail.com" && a.password === this.loginForm.value.password && a.password === "admin"
      })

      if(admin){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['facture']);
      }
      else if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['home']);
      }else{
        alert("user not found");
      }
    },err=>{
      alert("Somthing went worng");
    })
  }

  



}
