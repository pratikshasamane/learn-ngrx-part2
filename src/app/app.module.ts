import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterbtnComponent } from './component/counterbtn/counterbtn.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { counterReducer } from './master/store/counter.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './Material.module';
import { CustomincrementComponent } from './component/customincrement/customincrement.component';

import { HeaderComponent } from './component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingComponent } from './routing/app-routing/app-routing.component';
import { CounterPageComponent } from './component/counter-page/counter-page.component';
import { BlogComponent } from './component/blog/blog.component';
import { blogReducer } from './master/store/blog/blog.reducer';
import { Appstate } from './master/store/global/app.state';
import { addblog } from './master/store/blog/blog.actions';
import { AddblogComponent } from './component/addblog/addblog.component';
import { EffectsModule } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { BlogEffects } from './master/store/blog/blog.effects';
@NgModule({
  declarations: [
    AppComponent,
    CounterbtnComponent,
    CounterPageComponent,
    BlogComponent,
    CounterdisplayComponent,
    CustomincrementComponent,
    HeaderComponent,
    AddblogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatFormFieldModule,
    MatToolbarModule,
    AppRoutingComponent,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(Appstate),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([BlogEffects]),
  ],
  providers: [provideAnimationsAsync(), provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
