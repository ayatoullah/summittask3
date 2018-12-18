import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/Common/Http';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClientdataComponent } from './clientdata/clientdata.component';
import { MenuComponent } from './menu/menu.component';
import { TryServiceComponent } from './try-service/try-service.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    ClientdataComponent,
    MenuComponent,
    TryServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
