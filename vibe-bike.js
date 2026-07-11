const menuLinks = document.querySelectorAll('.menu-principal a');

const currentPage = window.location.pathname.split('/').pop().toLowerCase();



menuLinks.forEach((link, index) => {

    const href = link.getAttribute('href').toLowerCase();



    if (href === currentPage) {

        link.classList.add('ativo');

    }



    link.style.animationDelay = `${index * 0.06}s`;

    link.classList.add('link-entrada');

});



const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add('is-visible');

            revealObserver.unobserve(entry.target);

        }

    });

}, { threshold: 0.18 });



reveals.forEach((item) => revealObserver.observe(item));



window.addEventListener('scroll', () => {

    const menu = document.querySelector('.menu-principal');

    if (!menu) {

        return;

    }



    menu.style.boxShadow = window.scrollY > 8

        ? '0 10px 24px rgba(15, 23, 42, 0.18)'

        : 'none';

});



const imagens = document.querySelectorAll('.bike-table img');

imagens.forEach((img) => {

    img.addEventListener('mousemove', (event) => {

        const rect = img.getBoundingClientRect();

        const x = (event.clientX - rect.left) / rect.width;

        const y = (event.clientY - rect.top) / rect.height;

        const rotateY = (x - 0.5) * 6;

        const rotateX = (0.5 - y) * 6;



        img.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    });



    img.addEventListener('mouseleave', () => {

        img.style.transform = '';

    });

});
