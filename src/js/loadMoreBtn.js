
export default class LoadMoreBtn {
    constructor({ ref, hidden = false }) {
        this.ref = ref,
        hidden && this.hide()
    }

    enable() {
        this.ref.disabled = false;
    }

    disable() {
        this.ref.disabled = true;
    }

    show() {
        this.ref.classList.remove('is-hidden');
    }

    hide() {
        this.ref.classList.add('is-hidden');
    }
}
