function searchData() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll("#resultList li");
  const list = document.getElementById("resultList");
  const message = document.getElementById("searchMessage");

  // If input is empty
  if (input === "") {
    list.style.display = "none";
    message.style.display = "block";
    return;
  }

  list.style.display = "block";
  message.style.display = "none";

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(input) ? "" : "none";
  });
}
