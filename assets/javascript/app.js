let toggleBtn = document.querySelector('.switch input');
let monthly = document.querySelectorAll('.priceM');

function Toggle(){
    for (i = 0; i < monthly.length; i++) {
        if(toggleBtn.checked == false) {
            monthly[0].innerHTML = `<span class="dollz">&dollar;</span><span>19.99</span>`;
            monthly[1].innerHTML = `<span class="dollz">&dollar;</span><span>24.99</span>`;
            monthly[2].innerHTML = `<span class="dollz">&dollar;</span><span>39.99</span>`;
        } else {
            monthly[0].innerHTML = `<span class="dollz">&dollar;</span><span>199.99</span>`;
            monthly[1].innerHTML = `<span class="dollz">&dollar;</span><span>249.99</span>`;
            monthly[2].innerHTML = `<span class="dollz">&dollar;</span><span>399.99</span>`;
        }
    }
}
toggleBtn.addEventListener('click', Toggle);
