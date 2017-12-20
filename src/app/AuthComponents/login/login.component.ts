import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../AuthService/login.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginservice:LoginService,
    private route :Router
   ) { }

  ngOnInit() {
  }
  onLogin(value){
    // console.log(value)
    this.loginservice.login(value)
    .subscribe(
      () => this.gotoview())
  }
  gotoview(){
    this.route.navigateByUrl('/profile')
  }
}
