import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isLoggedIn = false;

  constructor(private aut: AuthService) { }

  ngOnInit() {
  }

  public onSignOut() {
    console.log('Sign out event caught');
  }

}
