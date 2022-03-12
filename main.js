let textarea = document.getElementById('textarea')
let highlight = document.getElementById('highlight')
let backdrop = document.getElementById('backdrop')
let container = document.getElementById('container')

var ua = window.navigator.userAgent.toLowerCase();
var isIE = !!ua.match(/msie|trident\/7|edge/);
var isWinPhone = ua.indexOf('windows phone') !== -1;
var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);

console.log(ua)
console.log(isIE)
console.log(isWinPhone)
console.log(isIOS)



function applyHighlights(text) {
    text = text
      .replace(/\n$/g, '\n\n')
      .replace(/[A-Z].*?\b/g, '<mark>$&</mark>');
    
    if (isIE) {
      // IE wraps whitespace differently in a div vs textarea, this fixes it
      text = text.replace(/ /g, ' <wbr>');
    }
    
    return text;
  }
  
//   function handleInput() {
//     var text = $textarea.val();
//     var highlightedText = applyHighlights(text);
//     $highlights.html(highlightedText);
//   }
  
//   function handleScroll() {
//     var scrollTop = $textarea.scrollTop();
//     $backdrop.scrollTop(scrollTop);
    
//     var scrollLeft = $textarea.scrollLeft();
//     $backdrop.scrollLeft(scrollLeft);  
//   }  
// function fixIOS() {
//     // iOS adds 3px of (unremovable) padding to the left and right of a textarea, so adjust highlights div to match
//     $highlights.css({
//       'padding-left': '+=3px',
//       'padding-right': '+=3px'
//     });
//   }
  
//   function bindEvents() {
//     $textarea.on({
//       'input': handleInput,
//       'scroll': handleScroll
//     });
  
//     $toggle.on('click', function() {
//       $container.toggleClass('perspective');
//     });  
//   }
  
//   if (isIOS) {
//     fixIOS();
//   }
  
//   bindEvents();
//   handleInput();


textarea.addEventListener('input',(e)=>{
    highlight.innerHTML="<mark>"+textarea.value+"</mark>"
})

// textarea.addEventListener('mousemove',(e)=>{
//     console.log(textarea.clientHeight + " " +textarea.clientWidth)
//     backdrop.style.height = textarea.clientHeight;
//     backdrop.style.width = textarea.clientWidth;
// })

// textarea.addEventListener('scroll',(e)=>{
//     backdrop.scrollTop(textarea.scrollTop())
// })