import { Component, OnInit, OnDestroy } from '@angular/core';

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImage: string;
}

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  autoSlideInterval: any;

  slides: Slide[] = [
    {
      id: 1,
      title: 'Elevating Brands Through Professional',
      subtitle: 'Web Development.',
      primaryButtonText: 'Free Consultation',
      secondaryButtonText: 'Our Services',
      backgroundImage: 'slider.png'
    },
    {
      id: 2,
      title: 'Transform Your Digital Presence',
      subtitle: 'With Cutting-Edge Solutions.',
      primaryButtonText: 'Get Started',
      secondaryButtonText: 'Learn More',
      backgroundImage: 'sliderr.png'
    },
    {
      id: 3,
      title: 'Innovation Meets Excellence',
      subtitle: 'In Every Project We Deliver.',
      primaryButtonText: 'Start Project',
      secondaryButtonText: 'View Portfolio',
      backgroundImage: 'sliderrr.png'
    }
  ];

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  onPrimaryButtonClick() {
    console.log('Primary button clicked:', this.slides[this.currentSlide].primaryButtonText);
  }

  onSecondaryButtonClick() {
    console.log('Secondary button clicked:', this.slides[this.currentSlide].secondaryButtonText);
  }
}