// function preloader() {
//   const animationContainer = document.getElementById("logo-animation");
//   const preloaderElement = document.getElementById("preloader");

//   if (animationContainer && preloaderElement) {
//     const animData = {
//       container: animationContainer,
//       renderer: "svg",
//       loop: false, // Set loop to false to run the animation only once
//       autoplay: true,
//       path: "assets/media/luxe-preloader.json", // Replace with your JSON file path
//     };

//     const anim = lottie.loadAnimation(animData);

//     // Hide preloader once the animation is complete
//     anim.addEventListener("complete", function () {
//       preloaderElement.style.display = "none";
//       // Show the rest of the content or perform other actions here
//     });
//   }
// }

// // Call preloader when the relevant elements are present
// document.addEventListener("DOMContentLoaded", preloader);
// Since the preloader is not needed, no preloader logic is present

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed, ready for other actions.");
  // Perform any necessary actions after the DOM is loaded
});
