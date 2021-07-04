import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Support } from 'src/shared/support';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.scss'],
})
export class ClientDeleteComponent implements OnInit {
  public client: any;
  public clientId: any;
  public loading: boolean = true;
  public loadingDelete: boolean = false;
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router,
    private support: Support
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.clientId = res.id;
    });
    this.clientService.getClientId(this.clientId).subscribe((client) => {
      this.client = client;
      this.loading = false;
    });
  }

  deleteClient() {
    this.loadingDelete = true;
    Swal.fire({
      title: 'Atenção',
      text: `Tem certeza que deseja excluir o cliente(a) ${this.client.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'sim',
      cancelButtonText: 'não',
    }).then((result) => {
      if (result.isConfirmed) {
        this.clientService.deleteClient(this.client.personId).subscribe(
          (res) => {
            Swal.fire({
              title: `${this.client.name}`,
              text:"Excluído com sucesso!",
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
            });
            this.router.navigate(['/clients']);
            this.loadingDelete = false;
          },
          (error) => {
            Swal.fire({
              title: `${this.client.name}`,
              text:"Excluído com sucesso!",
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#3085d6',
            });
            this.router.navigate(['/clients']);
            this.loadingDelete = false;
          }
        );

        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        this.loadingDelete = false;
      }
    });
  }

  cancelar() {
    this.router.navigate(['/clients']);
  }
}
