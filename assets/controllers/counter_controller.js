import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['count'];
    static values = { initialCount: Number };

    connect() {
        this.count = this.initialCountValue || 0;
        this.updateCountDisplay();
    }

    increment() {
        this.count++;
        this.updateCountDisplay();
    }

    updateCountDisplay() {
        this.countTarget.textContent = this.count;
    }
}