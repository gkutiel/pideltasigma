document.addEventListener('DOMContentLoaded', () => {
    const view = document.getElementById('view')
    katex.render("c = \\pm\\sqrt{a^2 + b^2}", view);
})