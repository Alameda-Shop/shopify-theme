/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you are an app developer and requires the theme to re-render the mini-cart, you can trigger your own event. If
 * you are adding a product, you need to trigger the "product:added" event, and make sure that you pass the quantity
 * that was added so the theme can properly update the quantity:
 *
 * document.documentElement.dispatchEvent(new CustomEvent('product:added', {
 *   bubbles: true,
 *   detail: {
 *     quantity: 1
 *   }
 * }));
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */


// Back to top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop < 20 || document.documentElement.scrollTop < 20) {
      	document.getElementById("myBtnTop").style.display = "block";
    } else {
        document.getElementById("myBtnTop").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// funcion para header con scroll anouncement bar
// const announcementBar = document.getElementById("shopify-section-announcement-bar");
// const headerMenu = document.getElementById("shopify-section-header");
// document.addEventListener("scroll", () => {
//   console.log("scrolleando")
//   announcementBar.classList.add(
//     'sticky',
//     announcementBar.scrollTop < 50
//     console.log("hola mundo test");
//   );
//   headerMenu.classList.add(
//     'sticky',
//     announcementBar.scrollTop < 50
//     console.log("hola mundo2 test");
//   );	
// });

/* Yotpo JavaScript */      
(function e(){var e=document.createElement("script");e.type="text/javascript",e.async=true,e.src="//staticw2.yotpo.com/kRFK8vGgWeEOmADY36qCaTAyIruU5xpx3nre215n/widget.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)})();
/* End of Yotpo JavaScript */




