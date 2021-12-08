document.querySelectorAll('.tabs__footer-link').forEach((item) =>
  item.addEventListener('click', function (e) {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs__footer-link').forEach((child) => child.classList.remove('active')
    );
    document.querySelectorAll('.donate__items').forEach((child) => child.classList.remove('active')
    );
    item.classList.add('active');
    document.getElementById(id).classList.add('active');
  })
);
document.querySelector('.tabs__footer-link').click();