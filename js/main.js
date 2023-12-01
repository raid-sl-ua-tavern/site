document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})

const headerEl = document.getElementById("header")

window.addEventListener("scroll", function () {
  const scrollPos = window.scrollY

  if (scrollPos > 100) {
    headerEl.classList.add("header_mini")
  } else {
    headerEl.classList.remove("header_mini")
  }
})

