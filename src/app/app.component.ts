import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlaygroundService } from './playground.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  activeTab: 'description' | 'code' = 'description';

  constructor(private playgroundService: PlaygroundService) { }

  toggleTab(tab: 'description' | 'code') {
    this.activeTab = tab;
  }

  ngOnInit() {

    this.playgroundService.simplePing().subscribe({
      next: (message) => console.log(message),
      error: (error) => console.log(error),
      complete: () => console.log('001 Ping observable completed')
    });

    this.playgroundService.ping().subscribe({
      next: message => console.log(message),
      error: error => console.log(error),
      complete: () => console.log('002 Ping observable completed!')
    });

    this.playgroundService.fetchNewPost().subscribe(
      data => console.log('New Post: ', data),
      error => console.log('Error: ', error),
      () => console.log(('003 Fetch New Post Complete'))
    );
  }



}