document.querySelector('.welcome__body').onclick = (event) => {
  const elem = event.target;
  if(elem.classList.contains('ip')){
    const ip = document.getElementById('ip');
    let value = ip.textContent;
    navigator.clipboard.writeText(value)
      .then(()=>{
        document.querySelector('.ip').innerHTML = 'Скопировано';
        setTimeout(()=>document.querySelector('.ip').innerHTML=value, 1500)
      })
  }
}