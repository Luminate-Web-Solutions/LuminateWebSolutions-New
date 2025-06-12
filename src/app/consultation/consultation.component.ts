import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-consultation',
  standalone: false,
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {
  consultationForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;

  constructor(private formBuilder: FormBuilder) {
    this.consultationForm = this.formBuilder.group({
      projectName: ['', [Validators.required, Validators.minLength(2)]],
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^[\+]?[0-9\s\-]{10,}$/)]],
      websiteFocus: ['', [Validators.required]],
      websiteDetails: ['', [Validators.required, Validators.minLength(20)]],
      additionalFeatures: [''],
      numberOfPages: ['1-10', [Validators.required]],
      references: [''],
      objective: ['', [Validators.required]],
      budget: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    // Component initialization
  }

  onSubmit(): void {
    if (this.consultationForm.valid) {
      this.isSubmitting = true;

      const formData = {
        projectName: this.consultationForm.get('projectName')?.value,
        fullName: this.consultationForm.get('fullName')?.value,
        email: this.consultationForm.get('email')?.value,
        contactNumber: this.consultationForm.get('contactNumber')?.value,
        websiteFocus: this.consultationForm.get('websiteFocus')?.value,
        websiteDetails: this.consultationForm.get('websiteDetails')?.value,
        additionalFeatures: this.consultationForm.get('additionalFeatures')?.value,
        numberOfPages: this.consultationForm.get('numberOfPages')?.value,
        references: this.consultationForm.get('references')?.value,
        objective: this.consultationForm.get('objective')?.value,
        budget: this.consultationForm.get('budget')?.value,
        submittedAt: new Date().toISOString()
      };

      this.submitConsultationForm(formData);
    } else {
      this.markFormGroupTouched();
    }
  }

  private submitConsultationForm(formData: any): void {
    // Simulate API call
    console.log('Consultation form submitted:', formData);

    // Simulate network delay
    setTimeout(() => {
      this.handleSubmissionSuccess();
    }, 2000);
  }

  private handleSubmissionSuccess(): void {
    this.isSubmitting = false;
    this.showSuccessMessage = true;
    this.consultationForm.reset();

    // Reset form to initial state
    this.consultationForm.patchValue({
      numberOfPages: '1-10'
    });

    // Hide success message after 8 seconds
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 8000);
  }

  private handleSubmissionError(error: any): void {
    this.isSubmitting = false;
    console.error('Error submitting consultation form:', error);
    // Handle error (show error message, etc.)
  }

  private markFormGroupTouched(): void {
    Object.keys(this.consultationForm.controls).forEach(key => {
      const control = this.consultationForm.get(key);
      control?.markAsTouched();
    });
  }

  // Getter methods for easy access to form controls
  get projectName() { return this.consultationForm.get('projectName'); }
  get fullName() { return this.consultationForm.get('fullName'); }
  get email() { return this.consultationForm.get('email'); }
  get contactNumber() { return this.consultationForm.get('contactNumber'); }
  get websiteFocus() { return this.consultationForm.get('websiteFocus'); }
  get websiteDetails() { return this.consultationForm.get('websiteDetails'); }
  get additionalFeatures() { return this.consultationForm.get('additionalFeatures'); }
  get numberOfPages() { return this.consultationForm.get('numberOfPages'); }
  get references() { return this.consultationForm.get('references'); }
  get objective() { return this.consultationForm.get('objective'); }
  get budget() { return this.consultationForm.get('budget'); }
}