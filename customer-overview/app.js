const rail = document.getElementById("rail");
const menu = document.getElementById("mobileMenu");
const backdrop = document.getElementById("mobileBackdrop");
const links = [...document.querySelectorAll("#chapterNav a")];
const chapters = [...document.querySelectorAll("[data-chapter]")];
const progressBar = document.getElementById("progressBar");

function setMenu(open) {
  rail?.classList.toggle("open", open);
  backdrop?.classList.toggle("open", open);
  menu?.setAttribute("aria-expanded", String(open));
  if (menu) menu.textContent = open ? "×" : "☰";
}

menu?.addEventListener("click", () => setMenu(!rail?.classList.contains("open")));
backdrop?.addEventListener("click", () => setMenu(false));
links.forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (event) => { if (event.key === "Escape") setMenu(false); });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const chapterObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  links.forEach((link) => {
    const active = link.getAttribute("href") === `#${visible.target.id}`;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "page"); else link.removeAttribute("aria-current");
  });
}, { rootMargin: "-20% 0px -55% 0px", threshold: [.05,.2,.5] });
chapters.forEach((chapter) => chapterObserver.observe(chapter));

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  if (progressBar) progressBar.style.width = `${progress * 100}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();
