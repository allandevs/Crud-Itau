import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Support } from 'src/shared/support';
import { ClientService } from '../client.service';
import { global } from './../../../../shared/global';
@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss'],
})
export class ClientUpdateComponent implements OnInit {
  public registrationEdit: FormGroup | any;
  public city: string = ' ';
  public state: string = ' ';
  public logradouro: string = ' ';
  public pinCode: string = ' ';
  public address: any;
  public maskTel = global.telmask;
  public maskPinCode = global.pinCodeMask;
  public maskCpf = global.cpfMask;
  public maskDate = global.dateMask;
  public maskAccount = global.accountMask;
  public maskAgency = global.agencyMask;
  public client: any;
  public clientId: any;
  public loading: boolean = true;
  public loadingUpdate: boolean = false;

  constructor(
    private clientService: ClientService,
    private support: Support,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      this.clientId = res.id;
    });
    this.clientService.getClientId(this.clientId).subscribe((client) => {
      this.client = client;
      this.logradouro = this.client.address.logradouro;
      this.city = this.client.address.city;
      this.pinCode = this.client.address.pinCode;
      this.state = this.client.address.state;
      this.initForm();
      this.loading = false;
    });
  }

  initForm() {
    this.registrationEdit = this.formBuilder.group({
      personId: [this.clientId],
      name: [this.client.name, Validators.required],
      cpf: [this.client.cpf, Validators.required],
      telefone: [this.client.telefone, Validators.required],
      dataNascimento: [this.client.dataNascimento],
      email: [this.client.email, Validators.required],
      agencia: [this.client.agencia, Validators.required],
      conta: [this.client.conta, Validators.required],
    });
  }

  updateClient() {
    this.loadingUpdate = true;
    const end = {
      city: this.city,
      state: this.state,
      logradouro: this.logradouro,
      pinCode: this.pinCode,
    };
    this.registrationEdit.setControl('address', new FormControl(end));
    this.clientService.updateClient(this.registrationEdit.value).subscribe(
      (res) => {
        this.router.navigate(['/clients']);
        this.loadingUpdate = false;
      },
      (error) => {
        this.router.navigate(['/clients']);
        this.support.showToasterSuccess('Alterações realizadas com sucesso');
        this.loadingUpdate = false;
      }
    );
  }

  searchCep(cepX: any) {
    let cep;
    cep = cepX.replace('-', '').replace('_', '');
    this.clientService.getEnd(cep).subscribe((res) => {
      this.address = res;
      this.logradouro = res.logradouro;
      this.city = res.localidade;
      this.state = res.uf;
    });
  }

  cancelar() {
    this.router.navigate(['/clients']);
  }
}
