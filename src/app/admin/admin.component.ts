import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="admin-container">
      <h2>Welcome to the Admin Area</h2>
      <p>This is a protected area for administrators.</p>
    </div>
  `,
  styles: [`
    .admin-container {
      max-width: 800px;
      margin: 50px auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  `]
})
export class AdminComponent {}