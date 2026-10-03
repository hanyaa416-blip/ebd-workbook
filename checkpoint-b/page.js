// Checkpoint B — your behaviour. Build it to checkpoint-b/spec.md.

import { items } from "./items.js";

export function renderItems(list) {
  const listElement = document.querySelector("#list");

  listElement.innerHTML = "";

  list.forEach((item) => {
    const line = document.createElement("li");

    line.classList.add("stock-line");

    line.textContent = `${item.name} (${item.category})`;

    listElement.append(line);
  });
}

export function matching() {
  return items.filter((item) => item.category === "kitchen");
}

export function start() {
  renderItems(items);

  document.querySelector("#apply").addEventListener("click", () => {
    renderItems(matching());
  });
}

start();