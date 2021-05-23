import anime from 'animejs';

export function componentEnter(el, done) {
  anime({
    targets: el,
    opacity: [0, 1],
    duration: 400,
    easing: 'linear',
    complete: done,
  });
}

export function componentLeave(el, done) {
  anime({
    targets: el,
    opacity: [1, 0],
    duration: 400,
    easing: 'linear',
    complete: done,
  });
}
