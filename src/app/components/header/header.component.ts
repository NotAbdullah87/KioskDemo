import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isMenuOpen = false;
  counter = 60;
  private counterSubscription: Subscription | undefined;

  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']);
  }
  ngOnInit() {
    this.startCounter();
  }

  ngOnDestroy() {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  startCounter() {
    this.counterSubscription = interval(1000).subscribe(() => {
      if (this.counter > 0) {
        this.counter--;
      } else {
        this.counterSubscription?.unsubscribe();
      }
    });
  }
}
