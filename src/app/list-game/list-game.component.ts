import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../../models/game';
import { AppService } from '../app.service';

declare var module: {
  id: string;
}

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.css']
})
export class ListGameComponent implements OnInit {

  games: Game[] = [];
  game = new Game();

  constructor(private router: Router, private appService: AppService  ) { }

  ngOnInit(): void {
    let data = sessionStorage.getItem('user');
    if(data === "admin"){
    this.getGames();
    }
    else{
      this.router.navigate(['/']);
    }
  }

  getGames() {
   fetch('http://localhost:3000/getgames', {
  method: 'GET'
})
.then((response) => response.json())
.then((data) => {
  let i = Object.keys(data).length;
  for (let x = 0; x <i;x++){
  var game = new Game();
  game._id = data[x]?.id ;
  game.name = data[x]?.gamename;
  game.publisher = data[x]?.author;
  game.quantity = data[x]?.quantity;
  this.games.push(game);
  }
})
.catch((error) => {
  console.error('Error:', error);
  alert('error');
});
  }

  deleteGame(game: Game) {
      const data = { 
        name: this.games[this.games.indexOf(game)].name
      };
    fetch('http://localhost:3000/deletegame', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('error');
    });
  }
}
