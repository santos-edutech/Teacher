import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { routes} from './routes';


@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true ,  preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
