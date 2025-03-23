import { Component, inject, input } from '@angular/core';
import { Location } from '@angular/common';
import { RickyService } from '../../services/ricky.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  id = input.required<string>();

  location = inject(Location);
  rickyService = inject(RickyService);

  /*
  personajeRs = rxResource({
    request: () => ({
      id: this.id(),
    }),
    loader: ({ request }) => this.rickyService.getProduct(request.id),
  });
  */
  personajeRs = this.rickyService.getProductRs(this.id);

  reset() {
    this.personajeRs.set(undefined);
  }

  getProducts() {
    this.personajeRs.reload();
  }

  goBack() {
    this.location.back();
  }
}
