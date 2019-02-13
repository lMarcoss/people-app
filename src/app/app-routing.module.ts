import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    data: {breadcrumb: 'inicio de sesión'},
    children: [{
      path: '',
      loadChildren: './login/login.module#LoginModule',
      data: {breadcrumb: 'INICIO'}
    }],
  },
  {
    path: 'home', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    useHash: true,
    enableTracing: false
  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

/*
    {
        path: 'login',
        component: BlanklayoutComponent,
        data: {breadcrumb: 'Inicio de sesión'},
        children: [
            {
                path: '',
                loadChildren: './login/login.module#LoginModule',
                data: {breadcrumb: 'INICIO'}
            }
        ]
    },
    {
        path: 'catalogos',
        component: GuacAdminComponent,
        data: {breadcrumb: 'remover-0001'},
        children: [
            {
                path: '',
                loadChildren: './guac/guac.module#GuacModule',
                data: {breadcrumb: 'remover-0001'}
            }
        ],
        canActivate: [AuthGuard]
    },
    {
        path: '**',
        redirectTo: 'error/404'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            GUAC_ROUTING,
            {
                enableTracing: false, // <-- debugging purposes only
                useHash: true
            }
        )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}

* */
