import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trumpishpeople',
  templateUrl: './trumpishpeople.component.html',
  styleUrls: ['./trumpishpeople.component.css']
})
export class TrumpishpeopleComponent implements OnInit {

  @Input()
  public parentData;
  @Output()
  public childEvent = new EventEmitter();

  public name = "";

  handPickedCelebrities: Object[];

  constructor() {
    this.handPickedCelebrities = [
      {
        name: "Shinsuke Nakamura",
        picture: "../../assets/images/nakamura.jpg"
      },
      {
        name: "Kellyanne Conway",
        picture: "../../assets/images/conway.jpg"
      },
      {
        name: "Khadim Rizvi",
        picture: "../../assets/images/rizvi.jpg"
      },
      {
        name: "Stephen K. Bannon",
        picture: "../../assets/images/bannon.jpg"
      },
      {
        name: "Cersei Lannister",
        picture: "../../assets/images/cersei.png"
      },
      {
        name: "Narendra Modi",
        picture: "../../assets/images/modi.jpg"
      },
      {
        name: "Nikki Haley",
        picture: "../../assets/images/nikki.jpg"
      },
      {
        name: "Conor McGregor",
        picture: "../../assets/images/conor.jpg"
      },
      {
        name: "Morena Baccarin",
        picture: "../../assets/images/morena.jpg"
      },
      {
        name: "Zlatan Ibrahimović",
        picture: "../../assets/images/ibrahimovich.jpg"
      }
    ];
   }

  ngOnInit() {
  }

  trumpIt(){
    this.childEvent.emit('You are Awesome!');
  }

}