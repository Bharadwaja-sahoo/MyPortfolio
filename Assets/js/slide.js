$(document).ready(function () {
  let currentCardIndex = 0;
  const cards = $('.we-card');
  const totalCards = cards.length;

  function updateCarousel() {
    cards.removeClass('active prev-1 next-1 prev-2 next-2 prev-3 next-3');
    $(cards[currentCardIndex]).addClass('active');

    const prevIndex_1 = (currentCardIndex - 1 + totalCards) % totalCards;
    const nextIndex_1 = (currentCardIndex + 1) % totalCards;
    const prevIndex_2 = (currentCardIndex - 2 + totalCards) % totalCards;
    const nextIndex_2 = (currentCardIndex + 2) % totalCards;
    const prevIndex_3 = (currentCardIndex - 3 + totalCards) % totalCards;
    const nextIndex_3 = (currentCardIndex + 3) % totalCards;

    $(cards[prevIndex_1]).addClass('prev-1');
    $(cards[nextIndex_1]).addClass('next-1');
    $(cards[prevIndex_2]).addClass('prev-2');
    $(cards[nextIndex_2]).addClass('next-2');
    $(cards[prevIndex_3]).addClass('prev-3');
    $(cards[nextIndex_3]).addClass('next-3');
  }

  updateCarousel();

  $('.right').click(function () {
    currentCardIndex = (currentCardIndex + 1) % totalCards;
    updateCarousel();
  });

  $('.left').click(function () {
    currentCardIndex = (currentCardIndex - 1 + totalCards) % totalCards;
    updateCarousel();
  });
  setInterval(function () {
    $('.right').click();
  }, 3000);
});