$('#myButton').on('click', function () {
  $(this).css('backgroundColor', 'white'), $(this).css('color', 'black')
})
let fetchCard = async () => {
  let htmlCard = ''
  let resCard = await fetch('http://localhost:3004/card')
  let dataCard = await resCard.json()
  dataCard.forEach(elem => {
    htmlCard += `
    <p class="salam-1"><img style="width: 40%; display: block; margin: 20px;" src="${elem.img}"
                alt="" />${elem.title}</p>
        <p class="salam-1"><img style="width: 40%; display: block; margin: 20px;" src="${elem.img}"
                alt="" />${elem.title}</p>
        <p class="salam-1"><img style="width: 40%; display: block; margin: 20px;" src="${elem.img}"
                alt="" />${elem.title}</p>
        <p class="salam-1"><img style="width: 40%; display: block; margin: 20px;" src="${elem.img}"
                alt="" />${elem.title}</p>
        <p class="salam-1"><img style="width: 40%; display: block; margin: 20px;" src="${elem.img}"
                alt="" />${elem.title}</p>
        <p class="salam-1"><img style="width: 40%; display: block; margin: 20px;" src="${elem.img}"
                alt="" />${elem.title}</p>
        <p class="salam-1"><img style="width: 40%; display: block; margin: 20px;" src="${elem.img}"
                alt="" />${elem.title}</p>
        <p class="salam-1"><img style="width: 40%; display: block; margin: 20px;" src="${elem.img}"
                alt="" />${elem.title}</p>
        <p class="salam-1"><img style="width: 40%; display: block; margin: 20px;" src="${elem.img}"
                alt="" />${elem.title}</p>
  `
  })

  document.querySelector('div.card-container1').innerHTML = htmlCard
}

document.addEventListener('DOMContentLoaded', fetchCard)
