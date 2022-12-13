import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { RestaurantData } from './restaruent.model';
import {ApiService} from '../shared/api.service';


@Component({
  selector: 'app-restaruent-dash',
  templateUrl: './restaruent-dash.component.html',
  styleUrls: ['./restaruent-dash.component.css']
})
export class RestaruentDashComponent implements OnInit {
  formValue!:FormGroup
restaurentModelObj:RestaurantData=new RestaurantData;
  allRestarantData: any;
  showAdd!:boolean;
  showbtn!:boolean;
  constructor(private formBuilder:FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      name:[""],
      email:[""],
      mobile:[" "],
      address:[" "],
      services:[" "]
    })
    this.getAllData()
  }
clickAddResto(){
  this.formValue.reset();
  this.showAdd=true;
  this.showbtn=false;
}
  //now subscribe
addResto(){
this.restaurentModelObj.name=this.formValue.value.name;
this.restaurentModelObj.email=this.formValue.value.email;
this.restaurentModelObj.mobile=this.formValue.value.mobile;
this.restaurentModelObj.address=this.formValue.value.address;
this.restaurentModelObj.services=this.formValue.value.services;

this.api.postRestaurant(this.restaurentModelObj).subscribe(res=>{
  console.log(res);
  alert("restuarnt record added successfully!");
let ref =document.getElementById('clear');
ref?.click();
this.formValue.reset()
this.getAllData();
},
  err=>{
  alert("please check it once ! something went wrong")
}
)

  }
  getAllData(){
    this.api.getRestaurant().subscribe(res=>{
      this.allRestarantData=res;
    })
  }
  deleteResto(data:any){
    this.api.deleteRestaurant(data.id).subscribe(res=>{
      alert("record deleted !")
      this.getAllData();
    })
  }
  onEditResto(data:any){
    this.showAdd=false;
    this.showbtn=true;
    this.restaurentModelObj.id= data.id
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);
    
  }
  updateResto(){
  this.restaurentModelObj.name=this.formValue.value.name;
this.restaurentModelObj.email=this.formValue.value.email;
this.restaurentModelObj.mobile=this.formValue.value.mobile;
this.restaurentModelObj.address=this.formValue.value.address;
this.restaurentModelObj.services=this.formValue.value.services;

this.api.updateRestaurant(this.restaurentModelObj,this.restaurentModelObj.id).subscribe(res=>{
  alert("Restaurant record updated");
  let ref = document.getElementById('clear');
ref?.click();

this.formValue.reset()
this.getAllData();//when u post the data
})
  }
}