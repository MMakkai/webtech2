import { Component, NgZone, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  name: string = '';
  quantity: number = 0;
  publisher: string = '';

  submitted = false;

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private appService: AppService
  ) {
  }
  gameForm = new FormGroup(
    {
      name: new FormControl(''),
      quantity: new FormControl(''),
      publisher: new FormControl(''),
    }
  );
  ngOnInit(): void {
    let data = sessionStorage.getItem('user');
    if(data != "admin"){
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    const data = { 
    name: this.gameForm.value.name,
    quantity: this.gameForm.value.quantity,
    publisher: this.gameForm.value.publisher
     };
fetch('http://localhost:3000/savegame', {
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
