const newItem = (url) => {
  const item = newImage(url);
  item.addEventListener("click", () => {
    item.remove();
    const inventoryItem = document.createElement("img");
    inventoryItem.src = url;
    inventory.append(inventoryItem);
  });
  return item;
};
