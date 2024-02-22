
let content = document.getElementById("content");

let nav = document.getElementById("nav");
let navCode = `
            <div class="navItem">Home</div>
            <div class="navItem" style="box-shadow: none;">Essential Oil</div>
`;
function toggleNav()
{
    if(nav.innerHTML == "")
    {
        nav.innerHTML = navCode;
    }
    else
    {
        nav.innerHTML = "";
    }
}



/* ----- ARROW ----- */

let arrow = document.getElementById("arrowNav");
let scrolling = false;

function toggleArrow(scroll)
{
    if(scrolling) return;
    
    if(scroll > 250)
    {
        arrow.classList.remove("hidden");
    }
    else
    {
        arrow.classList.add("hidden");
    }
}

window.addEventListener("scroll", (event) => {
    toggleArrow(this.scrollY);
});

let timer;

function scrollToTop()
{
    scroll();
    
    timer = setInterval(scrollUp, 1);
    
    content.addEventListener("touchstart", function () {
        stopScroll();
        content.removeEventListener('touchstart', null);
    });
}

function scroll()
{
    scrolling = true;
    arrow.classList.add("hidden");
    content.style.filter = "blur(1.5px) opacity(0.9)";
}

function scrollUp()
{
    if(this.scrollY > 0)
    {
        scrollTo(0, this.scrollY - 10);
    }
    else
    {
        stopScroll();
    }
}

function stopScroll()
{
    scrolling = false;
    content.style.filter = "none";
    // content.classList.remove("blur");
    clearTimeout(timer);
}