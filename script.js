$(document).ready(function () {
    // Mobile menu toggle
    $('.mobile-menu-toggle').click(function () {
        $('.nav-items').slideToggle();
    });

    // Slider functionality
    let currentSlide = 0;
    const $slides = $('.slider-container img');
    const slideCount = $slides.length;

    function showSlide(index) {
        if (index < 0) index = slideCount - 1;
        if (index >= slideCount) index = 0;
        currentSlide = index;
        $('.slider-container').css('transform', `translateX(-${currentSlide * 100}%)`);
        updateDots();
    }

    function updateDots() {
        $('.slider-dots .dot').removeClass('active');
        $(`.slider-dots .dot:eq(${currentSlide})`).addClass('active');
    }

    $('.slider-next').click(() => showSlide(currentSlide + 1));
    $('.slider-prev').click(() => showSlide(currentSlide - 1));

    // Create dots
    for (let i = 0; i < slideCount; i++) {
        $('.slider-dots').append(`<div class="dot"></div>`);
    }
    $('.slider-dots .dot').click(function () {
        showSlide($(this).index());
    });

    updateDots();

    // Auto-advance slides
    setInterval(() => showSlide(currentSlide + 1), 5000);

    // Menu data
    const menuItems = {
        kebaplar: [
            { name: "Adana Kebap", description: "Zesty minced meat kebab", price: 45, image: "https://via.placeholder.com/300x200.png?text=Adana+Kebap" },
            { name: "Urfa Kebap", description: "Non-spicy minced meat kebab", price: 40, image: "https://via.placeholder.com/300x200.png?text=Urfa+Kebap" },
            { name: "Kuzu Şiş", description: "Grilled lamb cubes on skewers", price: 50, image: "https://via.placeholder.com/300x200.png?text=Kuzu+Şiş" },
        ],
        corbalar: [
            { name: "Mercimek Çorbası", description: "Red lentil soup", price: 15, image: "https://via.placeholder.com/300x200.png?text=Mercimek+Çorbası" },
            { name: "İşkembe Çorbası", description: "Tripe soup", price: 20, image: "https://via.placeholder.com/300x200.png?text=İşkembe+Çorbası" },
        ],
        firin: [
            { name: "Lahmacun", description: "Turkish pizza with minced meat", price: 25, image: "https://via.placeholder.com/300x200.png?text=Lahmacun" },
            { name: "Pide", description: "Turkish flatbread with toppings", price: 30, image: "https://via.placeholder.com/300x200.png?text=Pide" },
        ],
        salatalar: [
            { name: "Çoban Salatası", description: "Shepherd's salad", price: 20, image: "https://via.placeholder.com/300x200.png?text=Çoban+Salatası" },
            { name: "Gavurdağı Salatası", description: "Spicy walnut salad", price: 25, image: "https://via.placeholder.com/300x200.png?text=Gavurdağı+Salatası" },
        ],
        icecekler: [
            { name: "Ayran", description: "Traditional yogurt drink", price: 8, image: "https://via.placeholder.com/300x200.png?text=Ayran" },
            { name: "Şalgam Suyu", description: "Turnip juice", price: 10, image: "https://via.placeholder.com/300x200.png?text=Şalgam+Suyu" },
        ],
        tatlilar: [
            { name: "Künefe", description: "Sweet cheese pastry", price: 35, image: "https://via.placeholder.com/300x200.png?text=Künefe" },
            { name: "Baklava", description: "Layered pastry with nuts", price: 30, image: "https://via.placeholder.com/300x200.png?text=Baklava" },
        ],
    };

    // Populate menu items
    Object.entries(menuItems).forEach(([category, items]) => {
        const $section = $(`#${category} .menu-items`);
        items.forEach(item => {
            $section.append(`
                <div class="menu-item fade-in">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="menu-item-content">
                        <h3>${item.name}</h3>
                        <p>${item.description}</p>
                        <p class="price">${item.price} TL</p>
                    </div>
                </div>
            `);
        });
    });

    // Blog posts data
    const blogPosts = [
        { title: "En İyi Kebap Tarifleri", excerpt: "Evde yapabileceğiniz lezzetli kebap tarifleri...", image: "https://via.placeholder.com/300x200.png?text=Kebap+Tarifleri", date: "2023-06-15" },
        { title: "Türk Mutfağının Tarihi", excerpt: "Türk mutfağının zengin tarihine bir yolculuk...", image: "https://via.placeholder.com/300x200.png?text=Türk+Mutfağı", date: "2023-07-01" },
        { title: "Yeni Dostlar Kebapçı'nın Hikayesi", excerpt: "Restoranımızın kuruluş hikayesi ve gelişimi...", image: "https://via.placeholder.com/300x200.png?text=Restoranımızın+Hikayesi", date: "2023-07-15" },
    ];

    // Populate blog posts
    blogPosts.forEach(post => {
        $('.blog-posts').append(`
            <div class="blog-post fade-in">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-post-content">
                    <h3>${post.title}</h3>
                    <p>${post.excerpt}</p>
                    <p class="date">${post.date}</p>
                </div>
            </div>
        `);
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    // Fade-in animation for elements as they come into view
    $(window).on('scroll', function () {
        $('.fade-in').each(function () {
            const elementTop = $(this).offset().top;
            const elementBottom = elementTop + $(this).outerHeight();
            const viewportTop = $(window).scrollTop();
            const viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    });
});