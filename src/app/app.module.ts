import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
// import { BooksComponent } from './books/books.component';
// import { BookComponent } from './books/book/book.component';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent, CartComponent],
  imports: [BrowserModule, BooksModule, AppRoutingModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
