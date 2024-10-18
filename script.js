var exploreTabs = document.querySelectorAll('.explore-menu li'),
exploreImages = document.querySelectorAll('.explore-images img'),
sections = document.querySelectorAll('.animated-section');

var imagesList = {
    "Cake": ['explore1.png', 'explore2.png', 'explore3.png', 'explore4.png', 'explore5.png', 'explore6.png'],
    "Muffins": ['explore5.png', 'explore8.jpg', 'explore3.png', 'explore10.jpg', 'explore12.jpg', 'explore2.png'],
    "Croissant": ['explore5.png', 'explore9.jpg', 'explore3.png', 'explore2.png', 'explore7.jpg', 'explore11.jpg'],
    "Bread": ['explore12.jpg', 'explore10.jpg', 'explore2.png', 'explore6.png', 'explore9.jpg', 'explore1.png'],
    "Tart": ['explore7.jpg', 'explore5.png', 'explore2.png', 'explore10.jpg', 'explore8.jpg', 'explore9.jpg'],
    "Favorite": ['explore6.png', 'explore1.png', 'explore4.png', 'explore7.jpg', 'explore11.jpg', 'explore12.jpg']
}


exploreTabs.forEach(tab => {
    tab.addEventListener('click', switchTabs);
});

function switchTabs() {
    this.parentElement.querySelector('.active').classList.remove('active');
    this.classList.add('active');
    var target = this.getAttribute('data-item');

    exploreImages.forEach((item, index) => {
        item.style.opacity = "0";
        item.style.transitionDelay = index * 0.1 + 's';
        setTimeout(() => {
            item.src = 'imgs/' + imagesList[target][index];
            item.style.opacity = '1';
        }, 1000);
    });
}





document.addEventListener('scroll', function () {
    sections.forEach((item) => {
        if (window.scrollY > item.offsetTop - 250) {
            item.querySelectorAll('.animated').forEach((el) => {
                el.classList.add('running');
            })
        }
    })
});