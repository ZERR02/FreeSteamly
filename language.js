const translations = {
    ru: {
        siteSubtitle: 'Каталог бесплатных игр',
        steam: 'Steam',
        back: 'Назад',
        search: 'Поиск игры',
        filterTitle: 'Фильтр по жанрам',
        allGames: 'Все игры',
        shooter: 'Шутер',
        action: 'Экшен',
        adult: '18+',
        details: 'Подробнее',
        trailer: 'Трейлер игры:',
        screenshots: 'Скриншоты игры:',
        official: 'Официальная ссылка на игру в Steam:',
        download: 'Скачать игру',
        contacts: 'Контакты',
        footer: 'Данный сайт никак не связан с Valve Corporation. Все игры распространяются на условиях их разработчиков.',
        maintenanceLabel: 'Важное сообщение',
        maintenanceTitle: 'Сайт дорабатывается',
        maintenanceText: 'Я добавляю новые игры по мере возможностей. Если вы хотите что-то предложить ->',
        maintenanceLink: 'Кликните здесь',
        understood: 'Понятно',
        noSearch: 'Ничего не найдено по запросу',
        noGenre: 'Нет игр в жанре',
        genres: { all: 'все жанры', moba: 'MOBA', shooter: 'Шутер', action: 'Экшен', adult: '18+' }
    },
    en: {
        siteSubtitle: 'Free games catalog',
        steam: 'Steam',
        back: 'Back',
        search: 'Search games',
        filterTitle: 'Filter by genre',
        allGames: 'All games',
        shooter: 'Shooter',
        action: 'Action',
        adult: '18+',
        details: 'Details',
        trailer: 'Game trailer:',
        screenshots: 'Game screenshots:',
        official: 'Official Steam link:',
        download: 'Download game',
        contacts: 'Contacts',
        footer: 'This website is not affiliated with Valve Corporation. All games are distributed under their developers\' terms.',
        maintenanceLabel: 'Important message',
        maintenanceTitle: 'The website is being improved',
        maintenanceText: 'I am adding new games when possible. If you have a suggestion ->',
        maintenanceLink: 'Click here',
        understood: 'Got it',
        noSearch: 'Nothing found for',
        noGenre: 'No games in the genre',
        genres: { all: 'all genres', moba: 'MOBA', shooter: 'Shooter', action: 'Action', adult: '18+' }
    }
};

const pageTranslations = {
    'Dota 2': {
        title: 'Dota 2',
        details: 'Release date: 2013<br>Genre: MOBA (Strategy / Action)<br>Developer: Valve<br>Publisher: Valve<br>Platform: PC<br>Edition: Licensed (Free-to-Play)<br>Interface language: Russian<br>Voice language: Russian',
        requirements: 'System requirements:<br>Operating system: Windows 10 / 11 64-bit<br>Processor: Dual-core Intel or AMD at 2.8 GHz or higher<br>RAM: 4 GB<br>Graphics card: NVIDIA GeForce 8600 / 9600GT or AMD Radeon HD 2600 / 3600 with DirectX 11 support<br>Sound card: DirectX 11 compatible audio device<br>Free disk space: 60 GB',
        description: 'Dota 2 is a team-based multiplayer online MOBA where two teams of five players battle on a symmetrical map. Each side aims to destroy the opponent\'s main building, known as the Ancient. Players control unique heroes with different abilities, gain experience and gold, buy items, and work together tactically. Dota 2 is known for its high difficulty, huge hero roster, strategic depth, and no gameplay-affecting purchases.'
    },
    'Counter Strike 2': {
        title: 'Counter Strike 2',
        details: 'Release date: 2023<br>Genre: Shooter (FPS)<br>Developer: Valve<br>Publisher: Valve<br>Platform: PC<br>Edition: Licensed (Free-to-Play)<br>Interface language: Russian<br>Voice language: Russian',
        requirements: 'Operating system: Windows 10<br>Processor: 4 CPU threads - Intel Core i5 750 or better<br>RAM: 8 GB<br>Graphics card: 1 GB video memory, DirectX 11 and Shader Model 5.0 compatible<br>DirectX: Version 11<br>Free disk space: 85 GB<br>Sound card: DirectX compatible',
        description: 'CS2 is a team-based first-person tactical shooter where counter-terrorists and terrorists fight rounds on specialized maps. Teams complete objectives such as planting a bomb, holding hostages, preventing an explosion, or rescuing hostages. Players earn money, buy weapons and armor, and use grenades for tactical control. CS2 is known for its competitive system, redesigned smoke physics, and no gameplay-affecting donations.'
    },
    CS2D: {
        title: 'CS2D',
        details: 'Release date: March 21, 2004<br>Genre: Top-down shooter<br>Developer: Unreal Software<br>Publisher: Unreal Software<br>Platform: PC (Windows, Linux, macOS)<br>Edition: Licensed (Free-to-Play)<br>Interface language: Russian, English, Chinese and others<br>Voice language: English',
        requirements: 'Operating system: Windows 10 / 11, Windows 7, Windows XP<br>Processor: 1 GHz<br>RAM: 256 MB<br>Graphics card: 64 MB, DirectX 9+ or OpenGL support<br>DirectX: Version 9.0c<br>Free disk space: 50 MB<br>Sound card: DirectX compatible',
        description: 'CS2D is a team-based top-down tactical shooter where counter-terrorists and terrorists fight rounds on pixel-art maps. Teams complete objectives such as planting a bomb, holding hostages, preventing an explosion, or rescuing hostages. Players earn money, buy weapons and armor, and use smoke grenades and Molotov cocktails for tactical map control. CS2D is known for its low system requirements, mod support, and no gameplay-affecting donations.'
    },
    'Team Fortress 2': {
        title: 'Team Fortress 2',
        details: 'Release date: 2007<br>Genre: Action<br>Developer: Valve<br>Publisher: Valve<br>Platform: PC<br>Edition: Licensed (Free-to-Play)<br>Interface language: Russian<br>Voice language: Russian',
        requirements: 'Operating system: Windows 7, Windows Vista, Windows XP<br>Processor: 1.7 GHz<br>RAM: 512 MB<br>Graphics card: 64 MB, DirectX 8.1 compatible<br>DirectX: Version 8.1<br>Free disk space: 15 GB<br>Sound card: DirectX compatible',
        description: 'TF2 is a team-based class shooter where players choose one of nine unique classes and fight across varied maps. Depending on the mode, teams capture flags, hold control points, deliver a bomb cart, or defend their base. Players use unique weapons and abilities, coordinate with medics, and strengthen their team through tactical play. TF2 is known for its cartoon style, huge loot arsenal, humor, and no gameplay-affecting donations.'
    },
    'War Thunder': {
        title: 'War Thunder',
        details: 'Release date: 2012<br>Genre: Strategy<br>Developer: Gaijin Entertainment<br>Publisher: Gaijin Network Ltd<br>Platform: PC, Mac, Linux, PlayStation 4/5 and Xbox One/Series X|S<br>Edition: Licensed (Free-to-Play)<br>Interface language: Russian<br>Voice language: Russian',
        requirements: 'Operating system: Windows 7 SP1 / 8 / 10 / 11 (64-bit)<br>Processor: Dual-core at 2.2 GHz<br>RAM: 4 GB<br>Graphics card: NVIDIA GeForce 400 series / AMD Radeon 46xx / Intel HD 4000 with DirectX 11 support<br>Disk space: approximately 75 GB (SSD recommended)',
        description: 'War Thunder is a large-scale free cross-platform online game about military vehicles of the 20th and 21st centuries. It combines aircraft, ground forces, and naval forces in realistic battles. The game features more than 2,000 models of tanks, aircraft, helicopters, and ships with detailed damage models and characteristics.'
    },
    'Lust Goddess': {
        title: 'Lust Goddess',
        details: 'Release date: 2024<br>Genre: 18+<br>Developer: Pochemu LTD<br>Publisher: Pochemu LTD<br>Platform: PC<br>Edition: Licensed (Free-to-Play)<br>Interface language: Russian<br>Voice language: Russian',
        requirements: 'Operating system: Windows 7 SP1 / 8 / 10 / 11 (64-bit)<br>Processor: Dual-core at 2.2 GHz<br>RAM: 1 GB<br>Disk space: approximately 4 GB',
        description: 'Lust Goddess is a turn-based strategy RPG and collectible card game with adult content, where you lead a squad of mercenaries in a futuristic setting. Players rescue characters, build relationships through dates, unlock outfits and biographies, and fight bandits.'
    }
};

const indexGameTranslations = {
    ru: [
        ['Dota 2', 'Многопользовательская командная компьютерная игра в жанре MOBA, разработанная и изданная корпорацией Valve.'],
        ['Counter Strike 2', 'Компьютерная игра в жанре многопользовательского тактического шутера от первого лица, разработанная компанией Valve.'],
        ['CS2D', 'Компьютерная игра в жанре командного Top-Down шутера, бесплатный двухмерный клон Counter-Strike компании Valve Software.'],
        ['Team Fortress 2', 'Девять классов с уникальными характерами откроют вам доступ ко множеству разнообразных тактик и навыков.'],
        ['War Thunder', 'Масштабная бесплатная онлайн-игра про реалистичную боевую технику от Второй мировой войны до современности.'],
        ['Lust Goddess', 'Условно-бесплатная коллекционная карточная игра с элементами RPG для взрослых (18+).']
    ],
    en: [
        ['Dota 2', 'A team-based multiplayer MOBA developed and published by Valve.'],
        ['Counter Strike 2', 'A multiplayer first-person tactical shooter developed by Valve.'],
        ['CS2D', 'A free team-based top-down shooter and 2D clone of Valve Software\'s Counter-Strike.'],
        ['Team Fortress 2', 'Choose from nine unique classes and discover countless tactics and skills.'],
        ['War Thunder', 'A large-scale free online game about realistic military vehicles from World War II to the present day.'],
        ['Lust Goddess', 'A free-to-play collectible card game with RPG elements and adult content (18+).']
    ]
};

const originalPage = {
    title: document.title,
    details: document.querySelector('.main-details')?.innerHTML,
    requirements: document.querySelector('.treb-details')?.innerHTML,
    description: document.querySelector('.game-desk p')?.textContent
};

function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
}

function setHTML(selector, value) {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
}

function applyLanguage(language) {
    const text = translations[language];
    const isHome = Boolean(document.querySelector('.games-grid'));
    document.documentElement.lang = language;
    localStorage.setItem('siteLanguage', language);

    let switcher = document.querySelector('.language-switcher');
    if (!switcher) {
        switcher = document.createElement('button');
        switcher.className = 'language-switcher';
        switcher.type = 'button';
        document.querySelector('header').appendChild(switcher);
        switcher.addEventListener('click', () => {
            const currentLanguage = localStorage.getItem('siteLanguage') || 'ru';
            applyLanguage(currentLanguage === 'ru' ? 'en' : 'ru');
        });
    }
    switcher.textContent = language === 'ru' ? 'EN' : 'RU';
    switcher.setAttribute('aria-label', language === 'ru' ? 'Switch to English' : 'Переключить на русский');

    const subtitle = document.querySelector('.logog p');
    if (subtitle) {
        subtitle.innerHTML = `${text.siteSubtitle} <a href="https://store.steampowered.com/">${text.steam}</a>`;
    }
    setText('.exit-btn', text.back);
    setText('.filters-section h3', text.filterTitle);
    setText('.filter-btn[data-genre="all"]', text.allGames);
    setText('.filter-btn[data-genre="shooter"]', text.shooter);
    setText('.filter-btn[data-genre="action"]', text.action);
    setText('.filter-btn[data-genre="adult"]', text.adult);
    setText('.trailer', text.trailer);
    setText('.screenshots-title', text.screenshots);
    setText('.official', text.official);
    setText('.link-game .btn', text.download);
    setText('.contact-info h3', text.contacts);
    setText('footer p', `© ${text.footer}`);

    const modalLabel = document.querySelector('.maintenance-label');
    if (modalLabel) {
        modalLabel.textContent = text.maintenanceLabel;
        setText('#maintenanceTitle', text.maintenanceTitle);
        const modalText = document.querySelector('.maintenance-modal > p:not(.maintenance-label)');
        if (modalText) modalText.innerHTML = `${text.maintenanceText} <a href="#footer">${text.maintenanceLink}</a>`;
        setText('#maintenanceConfirm', text.understood);
    }

    if (isHome) {
        document.querySelector('#searchInput').placeholder = text.search;
        document.querySelectorAll('.game-card').forEach((card, index) => {
            const data = indexGameTranslations[language][index];
            if (data) {
                card.querySelector('p').textContent = data[1];
                card.querySelector('.btn').textContent = text.details;
            }
        });
    } else {
        const page = pageTranslations[originalPage.title] || pageTranslations[document.querySelector('.logog h1')?.textContent];
        if (page && language === 'en') {
            document.title = page.title;
            setHTML('.main-details', page.details);
            setHTML('.treb-details', page.requirements);
            setText('.game-desk p', page.description);
        } else if (page && language === 'ru') {
            document.title = originalPage.title;
            setHTML('.main-details', originalPage.details);
            setHTML('.treb-details', originalPage.requirements);
            setText('.game-desk p', originalPage.description);
        }
    }
}

applyLanguage(localStorage.getItem('siteLanguage') || 'ru');
