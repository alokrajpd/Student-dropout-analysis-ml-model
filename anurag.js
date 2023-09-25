document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const age = document.getElementById("age").value;
    const standard = document.getElementById("Standard").value;
    const casteInputs = document.querySelectorAll(".caste");
    let selectedCaste = null;
    for (const casteInput of casteInputs) {
        if (casteInput.checked) {
            selectedCaste = casteInput.value;
            break;
        }
    }

    const genderInputs = document.querySelectorAll(".gender");
    let selectedGender = null;
    for (const genderInput of genderInputs) {
        if (genderInput.checked) {
            selectedGender = genderInput.value;
            break;
        }
    }

    const areaInputs = document.querySelectorAll(".area");
    let selectedArea = null;
    for (const areaInput of areaInputs) {
        if (areaInput.checked) {
            selectedArea = areaInput.value;
            break;
        }
    }

    const schoolInputs = document.querySelectorAll(".school");
    let selectedSchool = null;
    for (const sch of schoolInputs) {
        if (sch.checked) {
            selectedSchool = sch.value;
            break;
        }
    }

    const result = document.getElementById("result").value;
    const income = document.getElementById("income").value;

    // Now you have the form values, and you can use them to generate cards or perform other actions
    generateCards(age, standard, selectedCaste, selectedGender, selectedArea, selectedSchool, result, income);
});


function generateCards(age, standard, selectedCaste, selectedGender, selectedArea, selectedSchool, result, income) {
    const dynamicContentContainer = document.getElementById("dynamicContentContainer");
    dynamicContentContainer.innerHTML = ""; // Clear previous content

    // Check conditions and add content accordingly
    if (selectedCaste === "caste sc") {
        // If caste is SC, add specific text and a link
        const scText = document.createElement("p");
        scText.textContent = "You belong to the SC caste. Here is some information for SC students:";
        dynamicContentContainer.appendChild(scText);

        const scLink = document.createElement("a");
        scLink.href = "https://example.com/sc-info"; // Replace with your URL
        scLink.textContent = "SC Students' Resources"; // Replace with your link text
        dynamicContentContainer.appendChild(scLink);
    }

    if (parseInt(income) < 340000) {
        // If income is below 340000, add specific text and a link
        const lowIncomeText = document.createElement("p");
        lowIncomeText.textContent = "Your family income is below 340000. Here are some financial aid resources:";
        dynamicContentContainer.appendChild(lowIncomeText);

        const lowIncomeLink = document.createElement("a");
        lowIncomeLink.href = "https://example.com/financial-aid"; // Replace with your URL
        lowIncomeLink.textContent = "Financial Aid Information"; // Replace with your link text
        dynamicContentContainer.appendChild(lowIncomeLink);
    }
}

// Call the generateCards function with your form values
// For example:
// generateCards("18", "12", "caste sc", "1", "area r", "1", "85", "250000");

// function generateCards(age, standard, selectedCaste, selectedGender, selectedArea, selectedSchool, result, income) {
    // Your logic to generate cards based on form values goes here
    // You can access the form values as function parameters
    // For example:
    // console.log("Age:", age);
    // console.log("Standard:", standard);
    // console.log("Selected Caste:", selectedCaste);
    // console.log("Selected Gender:", selectedGender);
    // console.log("Selected Area:", selectedArea);
    // console.log("Selected School:", selectedSchool);
    // console.log("Result:", result);
    // console.log("Income:", income);

    // You can create and append cards to the cardContainer based on your conditions
    // Example:
    // const card = document.createElement("div");
    // card.classList.add("card");
    // card.textContent = "Card Content"; // Fill this out
    // cardContainer.appendChild(card);
// }