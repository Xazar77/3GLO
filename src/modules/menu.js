const menu = () => {
    const menuList = document.querySelector("menu"),
        menuItems = menuList.querySelectorAll("ul>li>a"),
        scrollBtn = document.querySelector("a img"),
        body = document.querySelector("body");

    const toggleMenu = () => {
        body.addEventListener("click", (e) => {
        if (e.target.closest(".menu")) {
            menuList.classList.add("active-menu");
        } else if (e.target.closest("menu")) {
            menuItems.forEach((menuItem) => {
            if (menuItem === e.target) {
                e.preventDefault();
                let menuItemId = menuItem.getAttribute("href");
                document.querySelector(menuItemId).scrollIntoView({
                behavior: "smooth",
                block: "start",
                });
            } else {
                menuList.classList.remove("active-menu");
            }
            });
        } else if (!e.target.closest("menu")) {
            menuList.classList.remove("active-menu");
        }
        });
    };
    toggleMenu();

    scrollBtn.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("#service-block").scrollIntoView({
        behavior: "smooth",
        block: "start",
        });
    });
};
export default menu;
