const searchInput = document.getElementById("searchInput");
const posts = document.querySelectorAll(".post-card");
const categoryButtons = document.querySelectorAll(".category");
const noResults = document.getElementById("noResults");
const themeBtn = document.getElementById("themeBtn");

let selectedCategory = "all";

function filterPosts() {
  const searchText = searchInput.value.toLowerCase();
  let visiblePosts = 0;

  posts.forEach(post => {
    const text = post.innerText.toLowerCase();
    const category = post.dataset.category;

    const matchesSearch = text.includes(searchText);
    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;

    if (matchesSearch && matchesCategory) {
      post.style.display = "block";
      visiblePosts++;
    } else {
      post.style.display = "none";
    }
  });

  noResults.style.display = visiblePosts === 0 ? "block" : "none";
}

searchInput.addEventListener("input", filterPosts);

categoryButtons.forEach(button => {
  button.addEventListener("click", () => {
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    selectedCategory = button.dataset.category;
    filterPosts();
  });
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️";
  } else {
    themeBtn.textContent = "🌙";
  }
});
