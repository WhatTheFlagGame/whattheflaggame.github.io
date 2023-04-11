//This script handles the orientation of the page and applies a different CSS style to it depending on whether the height or width is bigger. 
//The resize has been fixed, so that the resize event is no longer being fired when the scroll bar appears (which made the page really hard to use on mobile)

let currentOrientation = window.innerWidth > window.innerHeight ? style1 : style2;

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = `styles/${currentOrientation}.css`;
document.head.appendChild(link);

const handleOrientationChange = () => {
  currentOrientation = window.innerWidth > window.innerHeight ? style1 : style2;
};


let resizeTimer;
window.addEventListener('resize', function(event) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function() {
    handleOrientationChange();
    link.href = `styles/${currentOrientation}.css`;
    console.log('Window resized');
  }, 250);
});


