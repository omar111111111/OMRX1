var targetDiv = document.querySelector("#chat_container");
targetDiv.addEventListener('scroll', () => {
    const scr = Element.scrollY;
    console.log(scr);
});