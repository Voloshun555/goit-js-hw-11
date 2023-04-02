const spinner = document.querySelector('.js-spinner')
const body = document.querySelector('body')
export function spinnerPlay() {
body.classList.add('loading');
  }
  
  export function spinnerStop() {
    window.setTimeout(function () {
      body.classList.remove('loading');
      body.classList.add('loaded');
    },500);
  }