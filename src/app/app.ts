import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { aboutComponent } from '../about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, aboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {
  title = 'my-port';
}
