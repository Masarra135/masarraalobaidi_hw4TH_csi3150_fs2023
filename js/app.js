const filterForm = document.getElementById("filterForm");
const priceMinInput = document.getElementById("priceMin");
const priceMaxInput = document.getElementById("priceMax");
const makeFilter = document.getElementById("makeFilter");
const colorFilter = document.getElementById("colorFilter");

document.getElementById("filterButton").addEventListener("click", filterCards);

function filterCards() {
  const minPrice = parseFloat(priceMinInput.value);
  const maxPrice = parseFloat(priceMaxInput.value);

  const selectedMake = makeFilter.value;
  const selectedColor = colorFilter.value;

  const cards = document.querySelectorAll(".Cars");

  cards.forEach((card) => {
    const cardPrice = parseFloat(card.getAttribute("price"));
    const cardMake = card.getAttribute("type");
    const cardColor = card.getAttribute("color");
  });
}
