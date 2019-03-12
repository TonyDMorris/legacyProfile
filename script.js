function changeColor(navLink) {
  let nav = document.getElementById(`${navLink}`);
  let others = document.getElementsByClassName("nav-link");
  others.style.backgroundColor = "green";
  nav.style.backgroundColor = "blue";
}
