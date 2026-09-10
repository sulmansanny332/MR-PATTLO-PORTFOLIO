const nav = document.querySelector("nav"),
  menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
  nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", nav.classList.contains("open"));
});
document
  .querySelectorAll("nav a")
  .forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open")),
  );
const observer = new IntersectionObserver(
  (items) =>
    items.forEach((x) => {
      if (x.isIntersecting) {
        x.target.classList.add("show");
        observer.unobserve(x.target);
      }
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((x) => observer.observe(x));
const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
const modal = document.querySelector(".preview");
document.querySelectorAll(".moment").forEach((card) =>
  card.addEventListener("click", () => {
    modal.querySelector("h2").textContent = card.dataset.title;
    modal.showModal();
  }),
);
modal.querySelector(".close").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.currentTarget.querySelector(".form-status").textContent =
    "Thanks — your message draft is ready. Add a verified contact endpoint to send it.";
  e.currentTarget.reset();
});
