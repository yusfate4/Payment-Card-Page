// Card number
$(".input-card-number").on("keyup change", function () {
  $t = $(this);

  if ($t.val().length > 3) {
    $t.next().focus();
  }

  var card_number = " ";
  $(".input-card-number").each(function () {
    card_number += $(this).val() + " ";
    if ($(this).val().length == 4) {
      $(this).next().focus();
    }
  });

  $(".card-container .number").html(card_number);
});

// Card holder
$("#card-holder").on("keyup change", function () {
  $t = $(this);
  $(".card-container .card-holder div").html($t.val());
});

// $("#card-holder").on("keyup change", function () {
//   $t = $(this);
//   $(".card-container .card-holder div").html($t.val());
// });


// Card expiration date
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
