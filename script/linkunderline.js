document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-link'); // Все ссылки навигации
    const currentUrl = window.location.pathname; // Получаем текущий путь (например, /about.html)

    links.forEach(link => {
        // Если href ссылки совпадает с текущим путем
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('underlined-link'); // Добавляем класс для подсветки
            link.classList.add('.nav-link:after');
        }

    });
});
