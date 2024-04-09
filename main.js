let cursor = document.getElementById("cursor");
const item = document.querySelectorAll("ul li");

document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.pageY +'px';
  cursor.style.left = e.pageX + 'px';
  cursor.style.rotate = pageX + 'deg';
})
  
item.forEach(item => {
  item.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let itemWidth = item.clientWidth;
    let itemHeight = item.clientHeight;
    
    let transX = (x - itemHeight);
    let transY = (y - itemWidth);


    item.style.transform = `translateX(${transX}px) translateY(${transY}px)`;
  });
    item.addEventListener("mouseout", (e) => {
      item.style.transform = ``;
    });
})
