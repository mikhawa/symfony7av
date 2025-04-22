import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['toggleableElement'];

    toggle() {
        this.toggleableElementTarget.classList.toggle('hidden');
    }
}