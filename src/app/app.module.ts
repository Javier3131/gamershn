import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { SectionsModule } from './sections/sections.module';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

import { AppComponent } from './app.component';
import { PresentationComponent } from './presentation/presentation.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { PresentationModule } from './presentation/presentation.module';
import { LandingComponent } from './landing/landing.component';

import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { PuntosComponent } from './puntos/puntos.component';
import { PuntosListComponent } from './puntosList/puntosList.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';
import { MyMatchComponent } from './my-match/my-match.component';
import { BracketsComponent } from './brackets/brackets.component';
// tslint:disable-next-line: max-line-length
// import { NgttSingleEliminationTreeModule } from '../../node_modules/ng-tournament-tree/lib/single-elimination-tree/ngtt-single-elimination-tree.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    PuntosComponent,
    PuntosListComponent,
    AuthComponent,
    MyMatchComponent,
    BracketsComponent,
  ],
  imports: [
    // NgttSingleEliminationTreeModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    // PresentationModule,
    // SectionsModule,
    // ComponentsModule,
    // ExamplesModule,
    HttpClientModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
