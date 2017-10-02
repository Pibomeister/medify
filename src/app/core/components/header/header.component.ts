import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isLoggedIn: boolean;
  @Output() sideBarToggled = new EventEmitter();
  @Output() signOut = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.isLoggedIn);
  }

  public onSideBarToggled(): void {
    this.sideBarToggled.emit();
  }

  public onSignOut(): void {
    this.signOut.emit();
  }

}
