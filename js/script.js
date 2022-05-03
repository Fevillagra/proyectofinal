const h1 = document.getElementsByTagName('h1')
h1[0].innerText = 'GOOGLES & GLASSES'
h1[0].innerHTML = 'GOOGLES & <span style="color:black;">GLASSES</span>'

const help = document.getElementsByClassName('main-header__txt')
help[0].innerText = 'Need help?'

const cart = document.getElementById('cart--id')
cart.innerHTML = '<b>My cart</b><i class="fa-solid fa-shop"></i>'

const par = document.createElement('p')
par.innerHTML = '<h3>Discover the new glasses of the season</h3>'
document.body.append(par)

const h2 = document.getElementsByTagName('h2')
h2[5].remove()


let glasses = document.getElementById("glasses");

let sale   = ["<a href='#'>On sale</a>","<a href='#'>Women glasses</a>", "<a href='#'>Man glasses</a>", "<a href='#'>Summer 2022</a>",];

for (const one of sale) {    
    let li = document.createElement("li");
    li.innerHTML = one
    glasses.append(li);
}
