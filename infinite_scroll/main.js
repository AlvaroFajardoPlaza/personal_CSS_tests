const scroller_03 = document.querySelectorAll(".scroller__03")

// The statements says: "if prefers-reduced... is false: continue" :)
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation()
}

function addAnimation() {
    scroller_03.forEach((scroller) => {
        scroller.setAttribute("data-animated", true)

        // A partir de este punto, vamos a duplicar los elementos de nuestro div de Boos, y los vamos a añadir al scroller, sin tener que duplicarlos en el HTML
        const scrollerInner = document.querySelector(".__boos__div");

        // Tenemos que evitar crear un infinite loop, por lo que creamos un array de los elementos que hay dentro de nuestro div "__boos__div" solo en su estado inicial
        const boos = Array.from(scrollerInner.children)

        boos.forEach ((boo) => {
            const duplicatedBoo = boo.cloneNode(true);
            // console.log(duplicatedBoo)

            duplicatedBoo.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedBoo);
        })
    });
}