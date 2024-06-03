function updateProgressBar(step) {
  const progressSteps = document.querySelectorAll(".progress-container .step");
  if (progressSteps.length) {
    progressSteps.forEach((element, index) => {
      const isCurrentStep = index + 1 === parseInt(step);
      const previousStep = index;
      if (isCurrentStep && previousStep < index + 1) {
        for (let stepper = 0; stepper < previousStep; stepper++) {
          progressSteps[stepper].classList.add("completed");
          progressSteps[stepper].children[1].classList.add("completed");
          progressSteps[stepper].children[0].children[0].classList.add(
            "completed"
          );
        }
      }
      if (isCurrentStep) {
        element.children[0].children[1].classList.add("active");
        element.classList.add("active");
        element.children[1].classList.add("active");
      }
    });
  }
}

const stepNumber = 4; // Use this to set the current step number
updateProgressBar(stepNumber);
