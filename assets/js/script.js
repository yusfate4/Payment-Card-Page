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

const inputFields = document.querySelectorAll("card-digit");
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


// // Card expiration date
$("#card-expire-month, #card-expire-year").change(function () {
  m = $("#card-expire-month option").index(
    $("#card-expire-month option:selected")
  );
  m = m < 10 ? "0" + m : m;
  y = $("#card-expire-year").val().substr(2, 2);
  $(".card-expire-date div").html(m + "/" + y);
});

$("#ccv-card")
  .on("focus", function () {
    $(".card-container").addClass("hover");
  })
  .on("blur", function () {
    $(".card-container").removeClass("hover");
  })
  .on("keyup change", function () {
    $(".ccv div").html($(this).val());
  });

setTimeout(function () {
  $("#ccv-card")
    .focus()
    .delay(1000)
    .queue(function () {
      $(this).blur().dequeue();
    });
}, 500);
