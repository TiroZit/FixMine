const rangeValue = document.getElementById('rangeValue');
const rangeValue8 = document.getElementById('rangeValue8');
const range = document.querySelector('.goods__range');
range.oninput = (()=>{
  let value = range.value;
  rangeValue.textContent = value;
  rangeValue8.textContent = value * 8;
})
range.addEventListener('mousemove', function(){
  var x = range.value;
  var color = 'linear-gradient(90deg, #ffb900' + x + '%, #cdcdcd' + x + '%)';
  range.style.background = color;
})