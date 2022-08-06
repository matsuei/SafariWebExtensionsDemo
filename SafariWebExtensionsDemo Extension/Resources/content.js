browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    const element = document.getElementById('firstHeading');
    element.remove();
});
