import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/rxjs/counter.reducer';
import { CardLeftComponent } from './shared/components/card-left/card-left.component';
import { CardRightComponent } from './shared/components/card-right/card-right.component';
import { environment } from 'src/environments/environment';
import { HomeComponentComponent } from './shared/components/home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardLeftComponent,
    CardRightComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
