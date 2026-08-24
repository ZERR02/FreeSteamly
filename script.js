// script.js

const searchInput = document.getElementById('searchInput');
const gameCards = document.querySelectorAll('.game-card');
const gamesGrid = document.querySelector('.games-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentGenre = 'all'; // Текущий выбранный жанр
let currentSearch = '';    // Текущий поисковый запрос

// Основная функция фильтрации и поиска
function filterAndSearch() {
    let hasVisibleCards = false;
    
    gameCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        const year = card.querySelector('.year').textContent.toLowerCase();
        
        // Берем жанр из data-genre атрибута карточки
        const genre = card.getAttribute('data-genre');
        
        // Проверка по жанру
        const genreMatch = currentGenre === 'all' || genre === currentGenre;
        
        // Проверка по поиску
        const searchMatch = currentSearch === '' || 
                           title.includes(currentSearch) || 
                           description.includes(currentSearch) || 
                           year.includes(currentSearch);
        
        // Показываем карточку, если подходит и под жанр, и под поиск
        if (genreMatch && searchMatch) {
            card.style.display = '';
            card.style.opacity = '1';
            hasVisibleCards = true;
        } else {
            card.style.display = 'none';
            card.style.opacity = '0';
        }
    });
    
    // Показываем сообщение, если ничего не найдено
    showNoResultsMessage(!hasVisibleCards);
}

// Функция показа сообщения "ничего не найдено"
function showNoResultsMessage(show) {
    let noResultsMsg = document.querySelector('.no-results');
    
    if (show) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results';
            gamesGrid.appendChild(noResultsMsg);
        }
        noResultsMsg.textContent = currentSearch 
            ? `🔍 Ничего не найдено по запросу "${currentSearch}" в жанре ${getGenreName(currentGenre)}`
            : `🎮 Нет игр в жанре ${getGenreName(currentGenre)}`;
        noResultsMsg.style.display = 'block';
    } else if (noResultsMsg) {
        noResultsMsg.style.display = 'none';
    }
}

// Вспомогательная функция для названия жанра
function getGenreName(genre) {
    const genres = {
        'all': 'все жанры',
        'moba': 'MOBA',
        'shooter': 'Шутер',
        'top-down': 'Top-Down',
        'action': 'Экшен',
        'adult': '18+'
    };
    return genres[genre] || genre;
}

// Обработчик поиска
searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.toLowerCase().trim();
    filterAndSearch();
});

// Обработчики кнопок фильтров
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Убираем active у всех кнопок
        filterBtns.forEach(b => b.classList.remove('active'));
        // Добавляем active текущей
        btn.classList.add('active');
        // Обновляем текущий жанр
        currentGenre = btn.dataset.genre;
        // Применяем фильтр
        filterAndSearch();
    });
});

// Инициализация - применяем фильтр при загрузке страницы
filterAndSearch();