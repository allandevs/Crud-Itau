import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ClientService } from '../client.service';
import { Support } from 'src/shared/support';
import { global } from './../../../../shared/global';
@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss'],
})
export class ClientCreateComponent implements OnInit {
  public registration: FormGroup | any;
  public city: string = ' ';
  public state: string = ' ';
  public logradouro: string = ' ';
  public pinCode: string = ' ';
  public address: any;
  public cepX: any;
  public maskTel = global.telmask;
  public maskPinCode = global.pinCodeMask;
  public maskCpf = global.cpfMask;
  public maskDate = global.dateMask;
  public maskAccount = global.accountMask;
  public maskAgency = global.agencyMask;
  public loadingRegistration: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService,
    private support: Support,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registration = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      dataNascimento: [''],
      email: ['', Validators.required],
      agencia: ['', Validators.required],
      conta: ['', Validators.required],
    });
  }

  registrationClient() {
    this.loadingRegistration = true;
    if (
      this.registration.value.name == '' ||
      this.registration.value.cpf == '' ||
      this.registration.value.agencia == '' ||
      this.registration.value.conta == '' ||
      this.registration.value.email == '' ||
      this.registration.value.telefone == ''
    ) {
      this.support.showToaster('Preencha todos os campos!');
      this.loadingRegistration = false;
      return;
    }
    const end = {
      city: this.city,
      state: this.state,
      logradouro: this.logradouro,
      pinCode: this.pinCode,
    };
    this.registration.setControl('address', new FormControl(end));
    this.clientService
      .registerClient(this.registration.value)
      .subscribe((result) => {
        this.router.navigate(['/clients']);
        this.support.showToasterSuccess('Cliente cadastrado com sucesso');
        this.loadingRegistration = false;
      });
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
