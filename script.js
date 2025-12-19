// Show only selected section
function showSection(sectionId) {
  const sections = document.querySelectorAll(".content");
  sections.forEach(section => {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "block";
}

// Default page
document.addEventListener("DOMContentLoaded", () => {
  showSection("home");
});

// Search logic
function searchData() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll("#resultList li");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? "" : "none";
  });
}


