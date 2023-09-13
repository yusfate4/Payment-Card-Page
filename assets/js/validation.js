function numberValidator(element) {
  const input_value = element.value;
  const messageValidator = document.getElementById("messageValidator");
  if (/[^0-9]/.test(input_value)) {
    messageValidator.textContent = "Numbers are allowed only!!!";
    element.value = element.replace(/[^0-9]/g, "");
  } else {
    messageValidator.textContent = "";
  }
}

// ccv numbers
const ccv_input = document.getElementById("ccv-card");
ccv_input.addEventListener("input", () => {
  const input_value = ccv_input.value;
  const messageValidator = document.getElementById("messageValidator");

  if (input_value === "") {
    messageValidator.textContent = "";
  } else if (isNaN(input_value)) {
    messageValidator.textContent = "Numbers are allowed only for CVV!!!";
    ccv_input.value = "";
  } else {
    messageValidator.textContent = "";
  }
});

function cardholderValidator(element) {
  const input_value = element.value;
  const messageValidator = document.getElementById("messageValidator");
  if (/[^a-zA-Z\s']/.test(input_value)) {
    messageValidator.textContent = "Enter your name please!";
    element.value = input_value.replace(/[^a-zA-Z\s']/g, "");
  } else {
    messageValidator.textContent = "";
  }
}

// submission
function submissionValid() {
  const input1 = document.getElementById("card_number").value;
  const input2 = document.getElementById("card_number_1").value;
  const input3 = document.getElementById("card_number_2").value;
  const input4 = document.getElementById("card_number_3").value;

  if (
    input1.length !== 4 ||
    input2.length !== 4 ||
    input3.length !== 4 ||
    input4.length !== 4
  ) {
    messageValidator.textContent =
      "Please, enter your card numbers and must be at least 4 digits";
    return false;
  }

  const input_holder = document.getElementById("card-holder").value;
  const nameHolder = /^[A-Za-z ]+$/;
  if (!nameHolder.test(input_holder)) {
    messageValidator.textContent = "Please, enter your card name";
    return false;
  }

  // expiration date
  const select_month = document.getElementById("card-expire-month");
  const select_year = document.getElementById("card-expire-year");

  if (select_month.selectedIndex === 0 || select_year.selectedIndex === 0) {
    messageValidator.textContent =
      "Please, select a valid option for the year and month";
    return false;
  }

  // ccv
  const input_ccv = document.getElementById("ccv-card").value;

  if (input_ccv.length !== 3) {
    messageValidator.textContent = "Please, input your CVV 3 digits";
    return false;
  }

  alert("Your payment was successful!!!");
  return true;
}
