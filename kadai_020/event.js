document.addEventListener('DOMContentLoaded',() => {
  const pushBtn =document.getElementById('btn');
  pushBtn.addEventListener('click', () => {
    const textline = document.getElementById('text');
    textline.textContnet = textline.textContnet +'ボタンをクリックしました';
  })
})

