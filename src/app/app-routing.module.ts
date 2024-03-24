import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Início'
    }
  },
  {
    path: 'sobre',
    component: AboutComponent,
    data: {
      title: 'Sobre mim'
    }
  },
  {
    path: 'projetos',
    component: ProjectsComponent,
    data: {
      title: 'Projetos'
    }
  },
  {
    path: 'contato',
    component: ContactComponent,
    data: {
      title: 'Contato'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
