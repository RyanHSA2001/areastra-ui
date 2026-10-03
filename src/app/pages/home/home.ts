import { Component, signal } from '@angular/core';

interface HeroSlide {
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly activeSlide = signal(0);
  protected readonly slides: HeroSlide[] = [
    {
      eyebrow: 'Aura Lumina',
      title: 'Aura Lumina',
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=2000&q=85',
      imageAlt: 'Fones sem fio em destaque',
    },
    {
      eyebrow: 'Som que acompanha você',
      title: 'Ouça cada detalhe',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=2000&q=85',
      imageAlt: 'Fones de ouvido para ouvir suas músicas favoritas',
    },
    {
      eyebrow: 'Tecnologia para o seu dia',
      title: 'Seu ritmo, seu mundo',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=2000&q=85',
      imageAlt: 'Relógio inteligente em destaque',
    },
  ];

  protected showSlide(direction: number): void {
    this.activeSlide.update((current) => (current + direction + this.slides.length) % this.slides.length);
  }
}