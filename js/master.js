const buttons = document.querySelectorAll(".copyBtn");

buttons.forEach(button => {
  button.addEventListener("click", async () => {
    const url = button.getAttribute("data-link");
    const message = button.nextElementSibling;

    try {
      await navigator.clipboard.writeText(url);
      message.textContent = "✓";
      setTimeout(() => {
        message.textContent = "";
      }, 1500);
    } catch (err) {
      message.textContent = "Copy failed";
    }
  });
});

const names = document.querySelectorAll(".clickName");

names.forEach(name => {
  name.addEventListener("click", function () {
    name.classList.toggle("highlight");
  });
});
