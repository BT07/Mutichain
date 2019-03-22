import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-logincreator',
  templateUrl: './logincreator.component.html',
  styleUrls: ['./logincreator.component.css']
})
export class LogincreatorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(form:NgForm){
    console.log(form.value);
    if(form.value.Username==='admin' && form.value.Password==='admin'){
      console.log("Valid");
      this.router.navigate(['/creatordash']);
      console.log("User navigated to student dashboard!");
    }
    else{
      console.log("Invalid user credentials!");
    }


    }
}

