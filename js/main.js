/*overlay*/
function showNav() {
    document.getElementById('myNav').style.display = 'block';
}
function closeNav() {
    document.getElementById('myNav').style.display = 'none';
}
/*sticky bar*/
window.onscroll =function() {stickyFunction()};

var navbar = document.getElementById('sticky-bar');

var sticky = navbar.offsetTop;

function stickyFunction(){
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    }else{
        navbar.classList.remove('sticky');
    }
}
