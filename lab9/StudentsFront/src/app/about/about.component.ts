import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  date = new Date(2024, 4, 17, 13, 30, 0, 0).toString();
}
