const navbar = document.getElementById('nav-link')
const bar = document.getElementById('bar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    navbar.classList.toggle('active');
    console.log(true);
  });
}

if (close) {
  close.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
}











//Bennar Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.5,
});

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});


const observ = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

const workItems = document.querySelectorAll('.work-img');
workItems.forEach(item => {
  observ.observe(item);
});







const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 30);
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});
