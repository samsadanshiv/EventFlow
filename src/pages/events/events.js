const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".event-card");
const noResults = document.getElementById("noResults");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    let visibleCount = 0;

    cards.forEach((card, i) => {
      const match = filter === "all" || card.dataset.category === filter;
      if (match) {
        card.classList.remove("hidden");
        card.style.animationDelay = `${0.1 + (visibleCount % 3) * 0.1}s`;
        card.style.animation = "none";
        requestAnimationFrame(() => {
          card.style.animation = "";
        });
        visibleCount++;
      } else {
        card.classList.add("hidden");
      }
    });

    noResults.style.display = visibleCount === 0 ? "block" : "none";
  });
});
