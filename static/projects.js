// Get references to the relevant elements
const mealtimeGamificationButton = document.querySelector('.mealtime-gamification-group');
const project2Button = document.querySelector('.project-name-2-container');
const project3Button = document.querySelector('.project-name-3-container');
const project4Button = document.querySelector('.project-name-4-container');
const project5Button = document.querySelector('.project-name-5-container');
const projectImage = document.querySelector('.group-child4');
const projectNameHeading = document.querySelector('.mealtime-gamification3');
const projectDescription = document.querySelector('.lorem-ipsum-dolor1');
let previousButton = null;
const forPaddding = document.getElementsByClassName("lorem-ipsum-dolor-sit-amet-co-group");
console.log(forPaddding)
var buttons = document.getElementsByClassName("project-name-31");

function defaultButton(){
  buttons[0].classList.add("clicked");
        previousButton = buttons[0];
}
defaultButton()
// Add click event listeners to the buttons
mealtimeGamificationButton.addEventListener('click', function() {
  // Update image source, heading, and description
  console.log(1)
  projectImage.src = "static/assets/images/bg-1.png";
  projectNameHeading.textContent = 'AI For X-Ray TB Detection';
  projectDescription.textContent = 'AI for X-Ray TB detection is a medical imaging software that uses AI algorithms to quickly and accurately analyze chest X-ray images and detect tuberculosis. It can help healthcare professionals detect TB early, reduce human error, and improve patient outcomes, particularly in areas with limited access to specialized equipment or radiologists.';
  previousButton.classList.remove("clicked");
  button = this.querySelector("button");
  button.classList.add("clicked")
  previousButton=button;
  for (let i = 0; i < forPaddding.length; i++) {
    const element = forPaddding[i];
    if (element.classList.contains("addpadding")) {
      element.classList.remove('addpadding');
    }
  }
  

});

project2Button.addEventListener('click', function() {
  // Update image source, heading, and description
  projectImage.src = "static/assets/images/bg-2.png";
  projectNameHeading.textContent = 'AI For Rapid Diagnostic Tests';
  projectDescription.textContent = 'AI for rapid diagnostic tests uses artificial intelligence algorithms to quickly and accurately analyze lateral flow assay results. This technology can reduce human error, increase diagnostic accuracy, and improve patient outcomes, particularly in low-resource settings.';
  previousButton.classList.remove("clicked");
  button = this.querySelector("button");
  button.classList.add("clicked")
  previousButton=button;
  for (let i = 0; i < forPaddding.length; i++) {
    const element = forPaddding[i];
    if (element.classList.contains("addpadding")) {
      element.classList.remove('addpadding');
    }
  }

});

project3Button.addEventListener('click', function() {
  // Update image source, heading, and description
  projectImage.src = "static/assets/images/bg-3.png";
  projectNameHeading.textContent = 'Urine Diagnostics Automation';
  projectDescription.textContent = 'Image processing based urine sample detection is a technology that automatically detects and analyzes urine samples using digital images and advanced algorithms. It can identify various parameters such as Ascorbic Acid, Glucose, Bilirubin, Ketone, Specific Gravity, Blood, pH, Protein, Urobilinogen, Nitrite and Leukocytes';
  previousButton.classList.remove("clicked");
  button = this.querySelector("button");
  button.classList.add("clicked")
  previousButton=button;
  for (let i = 0; i < forPaddding.length; i++) {
    const element = forPaddding[i];
    if (element.classList.contains("addpadding")) {
      element.classList.remove('addpadding');
    }
  }
});

project4Button.addEventListener('click', function() {
  // Update image source, heading, and description
  projectImage.src = "static/assets/images/bg-4.png";
  projectNameHeading.textContent = 'Fieldstudy';
  projectDescription.textContent = 'Field study apps for crop quality, clinical trials and sales software applications that help researchers and practitioners conduct research studies more efficiently and accurately. These apps enable data collection, management, and analysis in real-time, providing insights into crop growth factors and streamlining process. They are essential tools for improving the accuracy of results and reducing the time and resources required for data collection and analysis.';
  previousButton.classList.remove("clicked");
  button = this.querySelector("button");
  button.classList.add("clicked")
  previousButton=button;
  for (let i = 0; i < forPaddding.length; i++) {
    const element = forPaddding[i];
    if (element.classList.contains("addpadding")) {
      element.classList.remove('addpadding');
    }
  }
  
  forPaddding[0].classList.add('addpadding');
});

project5Button.addEventListener('click', function() {
  // Update image source, heading, and description
  projectImage.src = "static/assets/images/bg-5.png";
  projectNameHeading.textContent = 'Apps For Devices Like Glucometers';
  projectDescription.textContent = 'Apps for devices like glucometers enable users to monitor and manage their health conditions, like diabetes, using a smartphone or tablet. These apps work with medical devices, allowing users to record and track blood sugar levels, set reminders, and receive notifications. The apps provide personalized insights and suggestions based on user data, improving the accuracy of monitoring and helping users manage their condition more effectively.';
  previousButton.classList.remove("clicked");
  button = this.querySelector("button");
  button.classList.add("clicked")
  previousButton=button;
  for (let i = 0; i < forPaddding.length; i++) {
    const element = forPaddding[i];
    if (element.classList.contains("addpadding")) {
      element.classList.remove('addpadding');
    }
  }
  
  forPaddding[0].classList.add('addpadding');
});
