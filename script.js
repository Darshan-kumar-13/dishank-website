function searchData() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll("#resultList li");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(input)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
