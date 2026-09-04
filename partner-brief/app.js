document.body.style.visibility = "hidden";
(() => { const s = document.createElement("script"); s.src = "../access-gate.js"; s.onerror = () => { document.body.style.visibility = "visible"; }; document.head.appendChild(s); })();

const rail = document.getElementById("rail");
const menu = document.getElementById("mobileMenu");
const backdrop = document.getElementById("mobileBackdrop");
const navLinks = [...document.querySelectorAll("#chapterNav a")];
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
navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const chapterObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const id = visible.target.id;
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === `#${id}`;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  },
  { rootMargin: "-20% 0px -55% 0px", threshold: [0.05, 0.2, 0.5] },
);
chapters.forEach((chapter) => chapterObserver.observe(chapter));

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0;
  if (progressBar) progressBar.style.width = `${progress * 100}%`;
}
window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

const scenarios = {
  conservative: {
    title: "Conservative scenario",
    arpa: "SAR 299 / month",
    values: ["SAR 0.27m", "SAR 0.90m", "SAR 2.33m"],
    customers: ["75 customers", "250 customers", "650 customers"],
    heights: [12, 39, 100],
  },
  base: {
    title: "Base scenario",
    arpa: "SAR 399 / month",
    values: ["SAR 0.72m", "SAR 3.11m", "SAR 8.62m"],
    customers: ["150 customers", "650 customers", "1,800 customers"],
    heights: [8, 36, 100],
  },
  upside: {
    title: "Upside scenario",
    arpa: "SAR 549 / month",
    values: ["SAR 1.65m", "SAR 7.91m", "SAR 26.35m"],
    customers: ["250 customers", "1,200 customers", "4,000 customers"],
    heights: [6, 30, 100],
  },
};

document.querySelectorAll("[data-scenario]").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.scenario;
    const scenario = scenarios[key];
    if (!scenario) return;
    document.querySelectorAll("[data-scenario]").forEach((item) => item.classList.toggle("active", item === button));
    document.getElementById("scenarioTitle").textContent = scenario.title;
    document.getElementById("scenarioArpa").textContent = scenario.arpa;
    scenario.values.forEach((value, index) => {
      document.getElementById(`value${index + 1}`).textContent = value;
      document.getElementById(`customers${index + 1}`).textContent = scenario.customers[index];
      document.getElementById(`bar${index + 1}`).style.setProperty("--h", `${scenario.heights[index]}%`);
    });
    document.querySelectorAll(".scenario-table .table-row:not(.table-head)").forEach((row) => {
      row.classList.toggle("active-row", row.querySelector("b")?.textContent.toLowerCase() === key);
    });
  });
});
