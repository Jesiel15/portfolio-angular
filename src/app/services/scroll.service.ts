import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private scrollTarget: string | null = null;

  setTarget(target: string) {
    this.scrollTarget = target;
  }

  getTarget(): string | null {
    const temp = this.scrollTarget;
    this.scrollTarget = null; // limpa após o uso
    return temp;
  }
}
