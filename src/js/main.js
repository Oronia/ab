


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
