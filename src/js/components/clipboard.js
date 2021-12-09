document.querySelector('.welcome__body').onclick = (event) => {
  const elem = event.target;
  if(elem.classList.contains('welcome__btn')){
    const ip = document.getElementById('ip');
    let value = ip.textContent;
    navigator.clipboard.writeText(value)
      .then(()=>{
        document.querySelector('.welcome__btn').innerHTML = 'Скопировано';
        setTimeout(()=>document.querySelector('.welcome__btn').innerHTML='Начать игру'+'<svg class="arrow-right" style="width: 30px; height: 30px; fill: undefined; stroke: undefined;"><use xlink:href="img/sprite.svg#arrow-right"></use></svg>', 1000)
      })
    console.log(value);
  }
}