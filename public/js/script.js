const cards = document.querySelectorAll('.card')
console.log(cards)

for (const card of cards) {
    card.addEventListener('click',function ( ){
      const id = card.getAttribute('id')
      window.location = `/course/${id}`
    })
    
}