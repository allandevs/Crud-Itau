import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ViewsComponent } from './views/views.component';
import { HomeComponent } from './views/home/home.component';
import { Support } from 'src/shared/support';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { ClientModule } from './components/client/client.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    ClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
    }),
    AppRoutingModule,
  ],
  providers: [Support],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
