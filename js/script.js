// Menu
const navbarNav = document.querySelector('.nav');
document.querySelector('#hamburger').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Search
const sf = document.querySelector('.search-form');
const sb = document.querySelector('#search-box');
document.querySelector('#search-btn').onclick = () => {
    sf.classList.toggle('active');
    sb.focus();
};

// Shopping-cart
const sc = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-btn').onclick = () => {
    sc.classList.toggle('active');
};

// Menghilangkan elemen
const hm = document.querySelector('#hamburger');
const sbt = document.querySelector('#search-btn');
const scbt = document.querySelector('#shopping-cart-btn');
document.addEventListener('click', function(e) {
    if(!navbarNav.contains(e.target) && !hm.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if(!sf.contains(e.target) && !sbt.contains(e.target)) {
        sf.classList.remove('active');
    }
    if(!sc.contains(e.target) && !scbt.contains(e.target)) {
        sc.classList.remove('active');
    }
});

// Product Modal Box
const mi = document.querySelector('#modal-item');
const mitw = document.querySelector('#modal-item-two');
const mith = document.querySelector('#modal-item-three');

document.querySelector('.eye-btn').onclick = () => {
    mi.style.display = 'flex';
}

document.querySelector('.eye-btn-two').onclick = () => {
    mitw.style.display = 'flex';
}

document.querySelector('.eye-btn-three').onclick = () => {
    mith.style.display = 'flex';
}

// Close
const cs = document.querySelectorAll('.close');
cs.forEach((Close) => {
    Close.onclick = () => {
        mi.style.display = 'none';
        mitw.style.display = 'none';
        mith.style.display = 'none';
    }
});

// Klik Luar modal
window.onclick = (e) => {
    if(e.target === mi) {
        mi.style.display = 'none';
    }
    if(e.target === mitw) {
        mitw.style.display = 'none';
    }
    if(e.target === mith) {
        mith.style.display = 'none';
    }
};