// Get references to the relevant elements
const mealtimeGamificationButton = document.querySelector('.mealtime-gamification-group');
const project2Button = document.querySelector('.project-name-2-container');
const project3Button = document.querySelector('.project-name-3-container');
// const project4Button = document.querySelector('.project-name-4-container');
// const project5Button = document.querySelector('.project-name-5-container');
const projectImage = document.querySelector('.group-child4');
const projectNameHeading = document.querySelector('.mealtime-gamification3');
const projectDescription = document.querySelector('.lorem-ipsum-dolor1');
let previousButton = null;
const forPadding = document.querySelector(".lorem-ipsum-dolor-sit-amet-co-group");
console.log(forPadding)
var buttons = document.getElementsByClassName("project-name-31");

function defaultButton(){
  buttons[0].classList.add("clicked");
        previousButton = buttons[0];
  forPadding.classList.add('addpadding123');
}
defaultButton()
// Add click event listeners to the buttons
mealtimeGamificationButton.addEventListener('click', function() {
  // Update image source, heading, and description
  console.log(1)
  projectImage.src = "static/assets/images/bg-1.png";
  projectNameHeading.textContent = 'Mealtime Gamification';
  projectDescription.textContent = 'Ai Nutrition Trackers for Kids is the ultimate AI-powered nutrition app designed to make healthy eating fun and engaging for children. Based on WHO recommendations, our app encourages children to track their food and drink intake, physical activity, and other important metrics. With gamification elements, children can earn rewards and share their achievements on a social feed when they achieve their nutrition goals consistently. Our AI-based food detection feature helps children develop healthy eating habits by analyzing the nutritional value of their meals in their journey toward a healthier future!';
  previousButton.classList.remove("clicked");
  button = this.querySelector("button");
  button.classList.add("clicked")
  previousButton=button;
  if (forPadding.classList.contains("addpadding23")) {
    forPadding.classList.remove('addpadding23');
  }
  if (!forPadding.classList.contains("addpadding1")) {
    forPadding.classList.add('addpadding1');
  }
});

project2Button.addEventListener('click', function() {
  // Update image source, heading, and description
  projectImage.src = "static/assets/images/bg-2.png";
  projectNameHeading.textContent = 'Raffle';
  projectDescription.textContent = "The solution to optimize your booth's potential at exhibitions. Stand out from the crowd with exciting contests and giveaways that attract attention. Engage visitors effortlessly by simplifying their participation process by scanning a QR code. Capture high-quality leads effortlessly and say goodbye to manual data collection. With Raffle, you can enhance the visitor experience and leave a lasting impression. Unlock the full potential of your exhibition booth and drive your lead generation efforts to new heights with Raffle.";
  previousButton.classList.remove("clicked");
  button = this.querySelector("button");
  button.classList.add("clicked")
  previousButton=button;
  if (forPadding.classList.contains("addpadding1")) {
    forPadding.classList.remove('addpadding1');
  }
  if (!forPadding.classList.contains("addpadding23")) {
    forPadding.classList.add('addpadding23');
  }

});

project3Button.addEventListener('click', function() {
  // Update image source, heading, and description
  projectImage.src = "static/assets/images/bg-3.png";
  projectNameHeading.textContent = 'ContentGenAI';
  projectDescription.textContent = 'A solution for personalized content creation and delivery. Whether you need bulk content curation or automated creation using ChatGPT, we have you covered. With easy integration using a CSV file for personalization, you can customize posts and templates for platforms like LinkedIn or emails. Streamline your campaigns with our seamless integration and deliver highly personalized content to your target audience.';
  previousButton.classList.remove("clicked");
  button = this.querySelector("button");
  button.classList.add("clicked")
  previousButton=button;
  if (forPadding.classList.contains("addpadding1")) {
    forPadding.classList.remove('addpadding1');
  }
  if (!forPadding.classList.contains("addpadding23")) {
    forPadding.classList.add('addpadding23');
  }
});

// project4Button.addEventListener('click', function() {
//   // Update image source, heading, and description
//   projectImage.src = "static/assets/images/bg-4.png";
//   projectNameHeading.textContent = 'Fieldstudy';
//   projectDescription.textContent = 'Field study apps for crop quality, clinical trials and sales software applications that help researchers and practitioners conduct research studies more efficiently and accurately. These apps enable data collection, management, and analysis in real-time, providing insights into crop growth factors and streamlining process. They are essential tools for improving the accuracy of results and reducing the time and resources required for data collection and analysis.';
//   previousButton.classList.remove("clicked");
//   button = this.querySelector("button");
//   button.classList.add("clicked")
//   previousButton=button;
//   if (forPadding.classList.contains("addpadding123")) {
//     forPadding.classList.remove('addpadding123');
//   }
//   if (!forPadding.classList.contains("addpadding45")) {
//     forPadding.classList.add('addpadding45');
//   }
// });

// project5Button.addEventListener('click', function() {
//   // Update image source, heading, and description
//   projectImage.src = "static/assets/images/bg-5.png";
//   projectNameHeading.textContent = 'Apps For Devices Like Glucometers';
//   projectDescription.textContent = 'Apps for devices like glucometers enable users to monitor and manage their health conditions, like diabetes, using a smartphone or tablet. These apps work with medical devices, allowing users to record and track blood sugar levels, set reminders, and receive notifications. The apps provide personalized insights and suggestions based on user data, improving the accuracy of monitoring and helping users manage their condition more effectively.';
//   previousButton.classList.remove("clicked");
//   button = this.querySelector("button");
//   button.classList.add("clicked")
//   previousButton=button;
//   if (forPadding.classList.contains("addpadding123")) {
//     forPadding.classList.remove('addpadding123');
//   }
//   if (!forPadding.classList.contains("addpadding45")) {
//     forPadding.classList.add('addpadding45');
//   }
// });
