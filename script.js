function hideAll() {
  document.getElementById("homeSection").classList.add("hidden");
  document.getElementById("searchSection").classList.add("hidden");
  document.getElementById("aboutSection").classList.add("hidden");
}

function showHome() {
  hideAll();
  document.getElementById("homeSection").classList.remove("hidden");
}

function showSearch() {
  hideAll();
  document.getElementById("searchSection").classList.remove("hidden");
}

function showAbout() {
  hideAll();
  document.getElementById("aboutSection").classList.remove("hidden");
}

function resetSearch() {
  const category = document.getElementById("category").value;
  const input = document.getElementById("searchInput");
  const list = document.getElementById("resultList");
  const message = document.getElementById("searchMessage");

  input.value = "";
  list.classList.add("hidden");

  if (category === "") {
    input.disabled = true;
    message.innerText = "Select a category and start typing";
  } else {
    input.disabled = false;
    message.innerText = "Start typing to see results";
  }
}

function searchData() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const category = document.getElementById("category").value;
  const items = document.querySelectorAll("#resultList li");
  const list = document.getElementById("resultList");

  if (input === "") {
    list.classList.add("hidden");
    return;
  }

  list.classList.remove("hidden");

  items.forEach(item => {
    const matchesText = item.textContent.toLowerCase().includes(input);
    const matchesCategory = item.dataset.type === category;

    item.style.display = (matchesText && matchesCategory) ? "" : "none";
  });
}

// Default view
showHome();

