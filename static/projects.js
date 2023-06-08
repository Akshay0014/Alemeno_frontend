// Get references to the relevant elements
const mealtimeGamificationButton = document.querySelector('.mealtime-gamification-group');
const project2Button = document.querySelector('.project-name-2-container');
const project3Button = document.querySelector('.project-name-3-container');
const project4Button = document.querySelector('.project-name-4-container');
const project5Button = document.querySelector('.project-name-5-container');
const project6Button = document.querySelector('.project-name-6-container');
const project7Button = document.querySelector('.project-name-7-container');
const project8Button = document.querySelector('.project-name-8-container');
const projectContainer = document.querySelector('.group-child4');
const projectNameHeading = document.querySelector('.mealtime-gamification3');
const projectDescription = document.querySelector('.lorem-ipsum-dolor1');
let previousButton = null;
const forPadding = document.querySelector(".lorem-ipsum-dolor-sit-amet-co-group");
console.log(forPadding)
var buttons = document.getElementsByClassName("project-name-31");

function defaultButton(){
  sourceHandler(buttons[0])
  buttons[0].classList.add("clicked");
        previousButton = buttons[0];
  forPadding.classList.add('addpadding23');
}
defaultButton()

function sourceHandler(btn) {
  projectContainer.innerHTML = '';
  console.log(btn)
  const mediaType = btn.dataset.mediaType;
  const mediaSource = btn.dataset.mediaSource;
  console.log(mediaSource)
  if (mediaType === 'image') {
    const image = document.createElement('img');
    image.src = mediaSource;
    image.alt = '';
    image.classList.add('group-child4');
    projectContainer.appendChild(image);
  } else if (mediaType === 'video') {
    const video = document.createElement('iframe');
    video.src = mediaSource;
    video.allow = "autoplay; fullscreen";
    projectContainer.appendChild(video);
    video.style.borderRadius ='12px';
    video.style.width = '400px'; // Set the width of the iframe
    video.style.height = '400px'; // Set the height of the iframe
    console.log(projectContainer);
  }
}
// Add click event listeners to the buttons
mealtimeGamificationButton.addEventListener('click', function() {
  // Update image source, heading, and description
  console.log(1)
  sourceHandler(mealtimeGamificationButton);
  projectNameHeading.textContent = 'Urisense';
  projectDescription.textContent = 'Image processing based urine sample detection is a technology that automatically detects and analyzes urine samples using digital images and advanced algorithms. It can identify various parameters such as Ascorbic Acid, Glucose, Bilirubin, Ketone, Specific Gravity, Blood, pH, Protein, Urobilinogen, Nitrite and Leukocytes';
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
  console.log(1)
  sourceHandler(project2Button);
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

project3Button.addEventListener('click', function() {
  // Update image source, heading, and description
  sourceHandler(project3Button);
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

project4Button.addEventListener('click', function() {
  // Update image source, heading, and description
  sourceHandler(project4Button);
  projectNameHeading.textContent = 'AI For X-Ray TB Detection';
  projectDescription.textContent = 'AI for X-Ray TB detection is a medical imaging software that uses AI algorithms to quickly and accurately analyze chest X-ray images and detect tuberculosis. It can help healthcare professionals detect TB early, reduce human error, and improve patient outcomes, particularly in areas with limited access to specialized equipment or radiologists.';
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

project5Button.addEventListener('click', function() {
  // Update image source, heading, and description
  sourceHandler(project5Button);
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

project6Button.addEventListener('click', function() {
  // Update image source, heading, and description
  sourceHandler(project6Button);
  projectNameHeading.textContent = 'Field Scope';
  projectDescription.textContent = 'Field study apps for crop quality, clinical trials and sales software applications that help researchers and practitioners conduct research studies more efficiently and accurately. These apps enable data collection, management, and analysis in real-time, providing insights into crop growth factors and streamlining process. They are essential tools for improving the accuracy of results and reducing the time and resources required for data collection and analysis.';
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

project7Button.addEventListener('click', function() {
  // Update image source, heading, and description
  sourceHandler(project7Button);
  projectNameHeading.textContent = 'AI For Rapid Diagnostic Tests';
  projectDescription.textContent = 'AI for rapid diagnostic tests uses artificial intelligence algorithms to quickly and accurately analyze lateral flow assay results. This technology can reduce human error, increase diagnostic accuracy, and improve patient outcomes, particularly in low-resource settings.';
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

project8Button.addEventListener('click', function() {
  // Update image source, heading, and description
  sourceHandler(project8Button);
  projectNameHeading.textContent = 'Apps For Devices Like Glucometers';
  projectDescription.textContent = 'Apps for devices like glucometers enable users to monitor and manage their health conditions, like diabetes, using a smartphone or tablet. These apps work with medical devices, allowing users to record and track blood sugar levels, set reminders, and receive notifications. The apps provide personalized insights and suggestions based on user data, improving the accuracy of monitoring and helping users manage their condition more effectively.';
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