import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FileComponent } from './file/file.component';
import { TextComponent } from './text/text.component';
import { DataBaseComponent } from './data-base/data-base.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule  } from '@angular/common/http';
import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    FileComponent,
    TextComponent,
    DataBaseComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ { provide: 'environment', useValue: environment }],
  bootstrap: [AppComponent, FileComponent, TextComponent, DataBaseComponent]
})
export class AppModule { }
