import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReservationList } from './reservationList';
import { ReservationItem } from './reservationItem';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatBadgeModule,
    MatTableModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'angularapp1';

  private list = new ReservationList('Ontario’s biosphere regions ', [
    new ReservationItem('Frontenac Arch: 9:00 AM to 12:00 PM'),
    new ReservationItem('Frontenac Arch: 12:00 PM to 3:00 PM'),
    new ReservationItem('Frontenac Arch: 3:00 PM to 6:00 PM'),
    new ReservationItem('Georgian Bay Mnidoo Gamii:  9:00 AM to 12:00 PM'),
    new ReservationItem('Georgian Bay Mnidoo Gamii: 12:00 PM to 3:00 PM'),
    new ReservationItem('Georgian Bay Mnidoo Gamii:  3:00 PM to 6:00 PM'),
    new ReservationItem('The Long Point Biosphere Region: 9:00 AM to 12:00 PM'),
    new ReservationItem('The Long Point Biosphere Region: 12:00 PM to 3:00 PM'),
    new ReservationItem('The Long Point Biosphere Region:3:00 PM to 6:00 PM'),
    new ReservationItem('The Niagara Escarpment: 9:00 AM to 12:00 PM'),
    new ReservationItem('The Niagara Escarpment:  12:00 PM to 3:00 PM'),
    new ReservationItem('The Niagara Escarpment: 3:00 PM to 6:00 PM')
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }

  get items(): readonly ReservationItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem: string) {
    if (newItem != "") {
      this.list.addItem(newItem);
    }
  }

  showComplete: boolean = false;
}
