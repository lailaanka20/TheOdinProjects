let container = document.querySelector(".container");

let btn = document.createElement("button");
btn.textContent = "Reset Grid";

btn.style.margin = "20px";
btn.style.width = "100px";
btn.style.height = "30px";
btn.style.border = "1px solid purple";
btn.style.borderRadius = "16px";
btn.style.backgroundColor = "violet";

document.body.appendChild(btn);
btn.addEventListener("click", () => {
  let newSize = parseInt(prompt("Enter new grid size (1-100):"));
  if (newSize >= 1 && newSize <= 100) {
    container.innerHTML = "";
    createGrid(newSize);
  }
});
createGrid(16);
function createGrid(size) {
  for (let i = 0; i < size * (size - 1); i++) {
    let cell = document.createElement("div");
    cell.style.width = `${500 / size}px`;
    cell.style.height = `${500 / size}px`;
    cell.style.border = "1px solid #eee";
    cell.style.boxSizing = "border-box";
    cell.style.margin = "5px";

    container.appendChild(cell);
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "rgba(93, 12, 144, 1)";
      e.target.style.opacity = `${parseFloat(e.target.style.opacity || 0) + 0.1}`;
    });
    // cell.addEventListener("mouseout", (e) => {
    //   e.target.style.backgroundColor = "transparent";
    // });
  }
}
