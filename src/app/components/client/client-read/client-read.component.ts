import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientService } from '../client.service';
import { ModalManager } from 'ngb-modal';
@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.scss'],
})
export class ClientReadComponent implements OnInit {
  public clients: any = [];
  public detailClient : any;
  public loading: boolean = true;
  public loadingDetailClient: boolean = false;
  @ViewChild('myModal') myModal: any;
  private modalRef: any;
  constructor(private clientService: ClientService, private modalService: ModalManager) {}

  ngOnInit(): void {
    this.clientService.getClients().subscribe((clients) => {
      this.clients = clients;
      this.loading = false;
    });
  }

  openModal(id: string) {
    this.loadingDetailClient = true;
    this.clientService.getClientId(id).subscribe((client) =>{
      this.detailClient = client
      this.loadingDetailClient = false;
    })
    this.modalRef = this.modalService.open(this.myModal, {
      size: 'md',
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: true,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: 'modal-backdrop',
    });
  }

  closeModal() {
    this.modalService.close(this.modalRef);
  }
}
