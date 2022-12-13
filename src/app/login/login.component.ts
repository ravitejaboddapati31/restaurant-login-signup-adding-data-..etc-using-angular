import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private _http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[''],
      password:['']

    })
  }
  //login method:
  logIn(){

this._http.get<any>(" http://localhost:3000/signup").subscribe(res=>{
  const user=res.find((ravi:any)=>{
    return ravi.email ===this.loginForm.value.email && ravi.password===this.loginForm.value.password

  })
  if(user){
    alert('user login is succesfully!')
    this.loginForm.reset();
    this.router.navigate(['restaurant'])
  }else{
    alert("user not found please enter correct details!")
  }
},
err=>{
alert("something went wrong 404!")
}
)
  }

}
