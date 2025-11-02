// Animate the title on load
window.addEventListener("load", () => {
    const title = document.querySelector("main h2");
    title.style.opacity = 0;
    title.style.transform = "translateY(-30px)";
    
    setTimeout(() => {
        title.style.transition = "all 1s ease";
        title.style.opacity = 1;
        title.style.transform = "translateY(0)";
    }, 300);
});

// Add hover effect on list items
document.querySelectorAll("header li").forEach(item => {
    item.addEventListener("mouseenter", () => {
        item.style.transform = "scale(1.1)";
        item.style.transition = "transform 0.2s ease-in-out";
    });
    item.addEventListener("mouseleave", () => {
        item.style.transform = "scale(1)";
    });
});
