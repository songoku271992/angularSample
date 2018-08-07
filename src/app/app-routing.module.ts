import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './home/component/header/header.component'

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {

        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        // children: [
        //     {
        //         path: 'home', loadChildren: './home/home.module#HomeModule',
        //     }
        // ]
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
