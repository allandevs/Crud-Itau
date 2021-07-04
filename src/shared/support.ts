import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class Support {
  constructor(private toastr: ToastrService) {}

  showToasterSuccess(msg: string) {
    this.toastr.success(msg);
  }

  showToaster(msg: any) {
    this.toastr.warning(msg);
  }
}
