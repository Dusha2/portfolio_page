document.querySelectorAll('.accordion__header').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;

        document.querySelectorAll('.accordion__container').forEach(item => {
            if (item !== content) {
                item.style.maxHeight = null;
            }
        });

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});