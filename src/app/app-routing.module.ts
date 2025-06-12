import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component'; 
import { AboutUsComponent } from './about-us/about-us.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CareerComponent } from './career/career.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { ProjectsComponent } from './projects/projects.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './footer/terms-conditions/terms-conditions.component';
import { DisclaimerComponent } from './footer/disclaimer/disclaimer.component';
import { RefundPolicyComponent } from './footer/refund-policy/refund-policy.component';
import { CancellationPolicyComponent } from './footer/cancellation-policy/cancellation-policy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'career', component: CareerComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'consultation', component: ConsultationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'case-studies', component: CaseStudiesComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'disclaimer', component: DisclaimerComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
  { path: 'cancellation-policy', component: CancellationPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
