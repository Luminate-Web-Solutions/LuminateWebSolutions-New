import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { PrivacyPolicyComponent } from './footer/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './footer/terms-conditions/terms-conditions.component';
import { DisclaimerComponent } from './footer/disclaimer/disclaimer.component';
import { RefundPolicyComponent } from './footer/refund-policy/refund-policy.component';
import { CancellationPolicyComponent } from './footer/cancellation-policy/cancellation-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutUsComponent,
    SolutionsComponent,
    NavbarComponent,
    FooterComponent,
    CareerComponent,
    BlogsComponent,
    ConsultationComponent,
    ProjectsComponent,
    CaseStudiesComponent,
    CareerComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    DisclaimerComponent,
    RefundPolicyComponent,
    CancellationPolicyComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
