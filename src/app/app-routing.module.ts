import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { PetCareComponent } from './pet-care/pet-care.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'petCare', component: PetCareComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
