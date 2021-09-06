export default function imgScroll (elemRef) {
    return elemRef.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    })
}