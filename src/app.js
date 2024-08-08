document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "brosur", img: "1.jpeg", price: 300000 },
      { id: 2, name: "cover", img: "2.jpg", price: 200000 },
      { id: 3, name: "logo", img: "3.jpg", price: 800000 },
      { id: 4, name: "spanduk", img: "4.jpeg", price: 800000 },
      { id: 5, name: "web", img: "5.jpeg", price: 3000000 },
      { id: 6, name: "cover", img: "6.png", price: 200000 },
    ],
  }));
});
