const imgs = [1, 2, 3, 4];
var index = 0;

document.querySelector('#next').addEventListener('click', (e) => {
    index++;
    if(index === imgs.length){
        index = 0;
    }
    document.querySelector('body').style.backgroundImage = `url('assets/${imgs[index]}.jpg')`
});

document.querySelector('#previous').addEventListener('click', (e) => {
    index--;
    if(index === -1){
        index = imgs.length - 1;
    }
    document.querySelector('body').style.backgroundImage = `url('assets/${imgs[index]}.jpg')`
});