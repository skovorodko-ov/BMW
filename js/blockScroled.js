const disableScroll = () => {
    document.body.dataset.scrollY = window.scrollY;

    document.body.style.cssText = `
    position:fixed;
    top:-${window.scrollY}px;
    left:0;
    overflow:hidden;
    height:100vh;
    `;

};

const enableScroll = () => {
    document.body.style.cssText = '';
};