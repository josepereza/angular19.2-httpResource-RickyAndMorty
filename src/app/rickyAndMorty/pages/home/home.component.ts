import { Component, inject } from '@angular/core';
import { RickyService } from '../../services/ricky.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
rickyService=inject(RickyService)
  personajes=this.rickyService.getProductsRs()

}
