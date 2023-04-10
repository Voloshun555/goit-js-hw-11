
document.querySelector('[data-menu-open]').addEventListener('click', (evt) =>{
evt.preventDefault();
if (localStorage.getItem('theeeema') === 'dark') {
   localStorage.removeItem('theeeema')
} else {
    localStorage.setItem('theeeema', 'dark')
}
getTema()
})

 export function getTema() {
 try {
     if (localStorage.getItem('theeeema') === "dark") {
        document.querySelector('html').classList.add('dark')
        const isOpenBtn = document.querySelector('[data-menu-open]');
        isOpenBtn.classList.add('is-open')   
     } else {
        const isOpenBtn = document.querySelector('[data-menu-open]');
        document.querySelector('html').classList.remove('dark')
        isOpenBtn.classList.remove('is-open')    
     }

 } catch (error) { }
}
getTema()
