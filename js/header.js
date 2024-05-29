const hamBtn = document.querySelector('.hamb');
const menu = document.querySelector('.m_under');

hamBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
});