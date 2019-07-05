import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './page-not-found/page-not-found.component';

import { SelectivePreloadingStrategyService } from './selective-preloading-strategy.service';
import { CountCharacterComponent } from './count-character/count-character.component';
import { NodeExtractComponent } from './node-extract/node-extract.component';
import { RemoveDuplicateComponent } from './remove-duplicate/remove-duplicate.component';
import { ReverseStringComponent } from './reverse-string/reverse-string.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: 'countchar', component: CountCharacterComponent },
  {path: 'nodeextract', component: NodeExtractComponent },
  {path: 'removeduplicate', component: RemoveDuplicateComponent },
  {path: 'reversestring', component: ReverseStringComponent },
  { path: '',   redirectTo: 'countchar', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
