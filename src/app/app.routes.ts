import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { AdministracionComponent } from './administracion/administracion.component';
import { PedidoComponent } from './pedido/pedido.component';

export const routes: Routes = [
    { path: 'registro', component: RegistroComponent},
    { path: 'login', component: LoginComponent},
    { path: '', component: InicioComponent}, 
    { path: 'cuenta', component: CuentaComponent},
    { path: 'administracion', component: AdministracionComponent},
    { path: 'pedido', component: PedidoComponent},
    {path: '', redirectTo: '', pathMatch: 'full'}
];

