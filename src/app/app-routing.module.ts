import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

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
