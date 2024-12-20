document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById("content");
    const links = document.querySelectorAll(".header-links a");

    const loadPage = (page) => {
        fetch(page)
            .then((response) => {
                if (!response.ok) throw new Error("Page not found");
                return response.text();
            })
            .then((html) => {
                content.innerHTML = html;
            })
            .catch((error) => {
                content.innerHTML = `<p>Error loading page: ${error.message}</p>`;
            });
    };

    loadPage("about.html");
    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const page = event.target.getAttribute("data-page");
            loadPage(page);
        });
    });
});
