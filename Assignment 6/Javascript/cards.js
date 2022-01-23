

window.onload = function assignClasses() {

    let cards = document.getElementsByClassName('card');
    console.log(cards);

    for (let i = 0 ; i < cards.length ; i++)
    {
        let childs = cards[i].childNodes;
        let imageNode = childs[1];
        // console.log(childs);
        console.log(imageNode);
        let imageHeight = null;
        imageHeight = imageNode.offsetHeight;
        console.log('Container: '+imageHeight);
        let cardHeight = 264 + imageHeight;
        cards[i].classList.add('card'+cardHeight);
        
        refreshLinks();
    }
};

// setInterval(function(){assignClasses()},3000);

function refreshLinks()
{
    let links = document.getElementsByTagName('link');
        for (let i = 0; i < links.length; i++) 
        {
            if (links[i].getAttribute('rel') == 'stylesheet') 
            {
                 let href = links[i].getAttribute('href').split('?')[0];
                let newHref = href + '?version=' 
                             + new Date().getMilliseconds();
                links[i].setAttribute('href', newHref);
            }
        }
}
