import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{BrowserAnimationsModule}from "@angular/platform-browser/animations"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasinmazComponent } from './components/tasinmazs/tasinmaz/tasinmaz.component';
import { IlComponent } from './components/il/il.component';
import { NaviComponent } from './components/navi/navi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { TasinmazAddComponent } from './components/tasinmazs/tasinmaz-add/tasinmaz-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HomeComponent } from './components/home/home.component';
import { MapComponent } from './components/map/map.component';
@NgModule({
  declarations: [
    AppComponent,
    TasinmazComponent,
    IlComponent,
    NaviComponent,
    FilterPipePipe,
    CartSummaryComponent,
    TasinmazAddComponent,
    LoginComponent,
    HomeComponent,
    MapComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
