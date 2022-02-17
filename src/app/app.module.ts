import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{BrowserAnimationsModule}from "@angular/platform-browser/animations"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasinmazComponent } from './components/tasinmaz/tasinmaz.component';
import { IlComponent } from './components/il/il.component';
import { NaviComponent } from './components/navi/navi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { TasinmazAddComponent } from './components/tasinmaz-add/tasinmaz-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TasinmazComponent,
    IlComponent,
    NaviComponent,
    FilterPipePipe,
    CartSummaryComponent,
    TasinmazAddComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
