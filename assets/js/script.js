// Card number
// $(".input-card-number").on("keyup change", function () {
//   $t = $(this);

//   if ($t.val().length > 3) {
//     $t.next().focus();
//   }

//   var card_number = " ";
//   $(".input-card-number").each(function () {
//     card_number += $(this).val() + " ";
//     if ($(this).val().length == 4) {
//       $(this).next().focus();
//     }
//   });

//   $(".card-container .number").html(card_number);
// });

const inputFields = document.querySelectorAll("input-card-number");
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
      (get_card_num,
      get_card_num_1,
      get_card_num_2,
      get_card_num_3.length === 4)
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
  document.querySelector("#month").innerHTML =
    document.querySelector("#card-expire-year").value;
};

// ccv
document.querySelector(".ccv-card").oninput = () => {
  document.querySelector(".ccv-back").innerHTML =
    document.querySelector(".ccv-card").value;
};

document.querySelector(".ccv-card").onmouseenter = () => {
  document.querySelector(".card-front").style.transform =
    "perspective(1000px) rotateY(-180deg)";

  document.querySelector(".card-back").style.transform =
    "perspective(1000px) rotateY(0deg)";
};
document.querySelector(".ccv-card").onmouseleave = () => {
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
      currentCardLogo = "assets/images/am.png";
    }

    if (cardFirstDigit === "4") {
      currentCardLogo = "assets/images/visa.png";
    } else {
      currentCardLogo = "assets/images/visa.png";
    }
    card_logo.src = currentCardLogo;
    console.log(currentCardLogo);
  }
}

card_input.addEventListener("input", changeCardLogo);

// // // Card expiration date
// $("#card-expire-month, #card-expire-year").change(function () {
//   m = $("#card-expire-month option").index(
//     $("#card-expire-month option:selected")
//   );
//   m = m < 10 ? "0" + m : m;
//   y = $("#card-expire-year").val().substr(2, 2);
//   $(".card-expire-date div").html(m + "/" + y);
// });

// $("#ccv-card")
//   .on("focus", function () {
//     $(".card-container").addClass("hover");
//   })
//   .on("blur", function () {
//     $(".card-container").removeClass("hover");
//   })
//   .on("keyup change", function () {
//     $(".ccv div").html($(this).val());
//   });

// setTimeout(function () {
//   $("#ccv-card")
//     .focus()
//     .delay(1000)
//     .queue(function () {
//       $(this).blur().dequeue();
//     });
// }, 500);
