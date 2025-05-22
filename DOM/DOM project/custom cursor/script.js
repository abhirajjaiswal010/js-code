  let cursor_container=document.querySelector(".main")
  let cursor=document.querySelector(".cursor")

  cursor_container.addEventListener('mousemove',(e)=>{
    cursor.style.left=e.clientX+"px"
    cursor.style.top=e.clientY+"px"

  })
