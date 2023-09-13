const inputFields = document.querySelectorAll(".input-card-number");
const card_number = document.getElementById("card-number");
const card_number_1 = document.getElementById("card-number-1");
const card_number_2 = document.getElementById("card-number-2");
const card_number_3 = document.getElementById("card-number-3");

// card number display
const card_num_display = document.getElementById("card-num-display");
const card_num_display_1 = document.getElementById("card-num-display-1");
const card_num_display_2 = document.getElementById("card-num-display-2");
const card_num_display_3 = document.getElementById("card-num-display-3");

// input 1
card_number.addEventListener("input", function () {
  const get_card_num = card_number.value;

  card_num_display.textContent = get_card_num;
  // console.log(card_num_display);
});

// input 2
card_number_1.addEventListener("input", function () {
  const get_card_num_1 = card_number_1.value;

  card_num_display_1.textContent = get_card_num_1;
  // console.log(card_num_display);
});

// input 3
card_number_2.addEventListener("input", function () {
  const get_card_num_2 = card_number_2.value;

  card_num_display_2.textContent = get_card_num_2;
  // console.log(card_num_display);
});

// input 4
card_number_3.addEventListener("input", function () {
  const get_card_num_3 = card_number_3.value;

  card_num_display_3.textContent = get_card_num_3;
});

// for each input
inputFields.forEach(function (input, index, fields) {
  input.addEventListener("input", function () {
    const get_card_num = input.value;
    const get_card_num_1 = input.value;
    const get_card_num_2 = input.value;
    const get_card_num_3 = input.value;

    if (
      get_card_num.length === 4 ||
      get_card_num_1.length === 4 ||
      get_card_num_2.length === 4 ||
      get_card_num_3.length === 4
    ) {
      if (index < fields.length - 1) {
        fields[index + 1].focus();
      }
    }
  });
});

// card holder
const card_holder_name = document.getElementById("card-holder");
const card_holder_display = document.getElementById("card_holder_display");

card_holder_name.addEventListener("input", function () {
  const card_holder = card_holder_name.value;

  card_holder_display.textContent = card_holder;
});

// card expiration month
document.querySelector("#card-expire-month").oninput = () => {
  document.querySelector("#month").innerHTML =
    document.querySelector("#card-expire-month").value;
};

// card expiration year
document.querySelector("#card-expire-year").oninput = () => {
  document.querySelector("#year").innerHTML =
    document.querySelector("#card-expire-year").value;
};

// ccv
document.querySelector(".ccv-card-num").oninput = () => {
  document.querySelector(".ccv-back").innerHTML =
    document.querySelector(".ccv-card-num").value;
};

document.querySelector(".ccv-card-num").onmouseenter = () => {
  document.querySelector(".card-front").style.transform =
    "perspective(1000px) rotateY(-180deg)";

  document.querySelector(".card-back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};
document.querySelector(".ccv-card-num").onmouseleave = () => {
  document.querySelector(".card-front").style.transform =
    "perspective(1000px) rotateY(0deg)";

  document.querySelector(".card-back").style.transform =
    "perspective(1000px) rotateY(180deg)";
};

// change card logo
const card_logo = document.getElementById("card-front-logo");
const card_input = document.getElementById("card-number");

let currentCardLogo = "assets/images/visa.png";

function changeCardLogo() {
  const card_input_value = card_input.value;

  if (card_input_value.length > 0) {
    const cardFirstDigit = card_input_value[0];
    if (cardFirstDigit === "2" || cardFirstDigit === "5") {
      currentCardLogo = "assets/images/mc.png";
    }

    if (cardFirstDigit === "3") {
      // console.log(currentCardLogo);
      currentCardLogo = "assets/images/am.png";
    }

    if (cardFirstDigit === "4") {
      currentCardLogo = "assets/images/visa.png";
    }
  } else {
    currentCardLogo = "assets/images/visa.png";
  }
  card_logo.src = currentCardLogo;
}
card_input.addEventListener("input", changeCardLogo);
