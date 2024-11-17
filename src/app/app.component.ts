import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JorgeComponent } from "./jorge/jorge.component";
import { AngeloComponent } from "./angelo/angelo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JorgeComponent, AngeloComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Jorge te amo';
}
