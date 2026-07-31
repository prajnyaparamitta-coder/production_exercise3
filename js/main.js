const toggle = document.querySelector(".header__toggle");
const nav = document.querySelector(".header__nav");

toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", isOpen);
    toggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
});

// テーマ手動切り替え（OS追従を手動で上書き）
const themeToggle = document.querySelector(".header__theme");
const root = document.documentElement;

// 保存済みの選択があれば復元
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    root.style.colorScheme = savedTheme;
}

themeToggle.addEventListener("click", () => {
    // 現在の実際の配色を判定（未指定ならOSの現在値を見る）
    const current =
        root.style.colorScheme ||
        (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.style.colorScheme = next;
    localStorage.setItem("theme", next);
});

// チケット合計計算
const qtyInputs = document.querySelectorAll(".ticket-row__qty");
const totalEl = document.querySelector("#ticket-total");

function updateTotal() {
    let total = 0;
    qtyInputs.forEach((input) => {
        const price = Number(input.dataset.price);
        const qty = Number(input.value) || 0;
        total += price * qty;
    });
    totalEl.textContent = total.toLocaleString();
}

qtyInputs.forEach((input) => {
    input.addEventListener("input", updateTotal);
});