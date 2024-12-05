import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Section1Component } from './components/section-1/section-1.component';
import { Section2Component } from './components/section-2/section-2.component';
import { Section3Component } from './components/section-3/section-3.component';
import { Section4Component } from './components/section-4/section-4.component';
import { Section5Component } from './components/section-5/section-5.component';
import { Section6Component } from './components/section-6/section-6.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, Section1Component, Section2Component, Section3Component, Section4Component, Section5Component, Section6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dilvantjuanfalcon';
}
