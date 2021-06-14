document.addEventListener('DOMContentLoaded', () => {
    
    const featureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub');
    
    for (let i = 0; i < featureLinkElems.length; i++) {
        featureLinkElems[i].addEventListener('click', () => {
            if (featureLinkElems[i].classList == "feature__link feature__link_active") {
                featureSubElems[i].classList.add('hidden');
                featureLinkElems[i].classList.remove('feature__link_active');  
            } else {
                for (let x = 0; x < featureLinkElems.length; x++) {
                    featureSubElems[x].classList.add('hidden');
                    featureLinkElems[x].classList.remove('feature__link_active');
                };
                    featureSubElems[i].classList.remove('hidden');
                    featureLinkElems[i].classList.add('feature__link_active');  
            }
        });
    }
});

