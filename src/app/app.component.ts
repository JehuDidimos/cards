import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){ }

  ngOnInit(){
    console.log(this.cards[0]);
  }

  cards = [
    {
      title: 'Tree',
      subtitle: '@nature',
      desc: 'Saw this awesome tree',
      imageSrc: 'assets/tree.jpeg'
    },
    {
      title: 'Bike',
      subtitle: '@Roads',
      desc: 'Saw this awesome bike',
      imageSrc: 'assets/biking.jpeg'
    },
    {
      title: 'Mountain',
      subtitle: '@Rocks',
      desc: 'Saw this awesome mountain',
      imageSrc: 'assets/mountain.jpeg'
    }
  ];
  
}

