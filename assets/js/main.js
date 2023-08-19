// slider

$(document).ready(function () {
  // get card width dynamically
  cardWidth = $(".slide-card").width();
  // next-arrow
  $('#next-arrow').click(function () {
      var firstChildAppend = $(".slide-card:first-child()");
      $(".slide-card").animate({ left: -cardWidth }, function () {
          $('.slider-wrap').append(firstChildAppend);
          $(".slide-card").css({
              left: 0,
          })
      })
  });
  // previous-arrow
  $('#previous-arrow').click(function () {
      var lastChildPrepend = $(".slide-card:last-child()");
      $(".slide-card").animate({ left: cardWidth }, function () {
          $('.slider-wrap').prepend(lastChildPrepend);
          $(".slide-card").css({
              left: 0,
          })
      })
  });
});

// light box

$(document).ready(function () {
  // Open lightbox when an image is clicked
  $('.gallery img').click(function () {
    var imageUrl = $(this).attr('src');
    console.log(this)
    $('.lightbox-image').attr('src', imageUrl);
    $('.lightbox').fadeIn();
  });

  // Close lightbox when close button is clicked
  $('.close-btn').click(function () {
    $('.lightbox').fadeOut();
  });

  // Close lightbox when clicking outside the image
  $('.lightbox').click(function (event) {
    if ($(event.target).hasClass('lightbox')) {
      $('.lightbox').fadeOut();
    }
  });

  // Close lightbox when pressing the 'Esc' key
  $(document).keyup(function (event) {
    if (event.key === 'Escape') {
      $('.lightbox').fadeOut();
    }
  });
});

// magnifier


function firstimg(url, id) {
  $('.magnifyimg').removeAttr('src')
  $('.magnifyimg').attr('src', url)
  $("#tap").css("border", "none");
  $("#tap1").css("border", "none");
  $("#tap2").css("border", "none");
  $(id).css("border", "2px solid green");
  $('.parent').css('width', $('.magnifyimg').width());
  $('.magnifyimg')
    .parent()
    .zoom({
      magnify: 2,
      target: $('.contain').get(0)
     
    });
    console.log(get(0))
}

// typeahead

$( function() {
  var availableTags = [
    "Asus Series",
    "Apple seiers",
    "MacBook",
    "Samsung",
    "Realme series",
    "mi series",
    "LG Series",
    "HP Series",
    "Lenovo Series",
    "Dell Series",
    "Philips series",
    "Microsoft Series"
   
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );

// feedback

$(document).ready(function () {

  
  $('#s1, #s2, #s3, #s4, #s5').click(function() {
    var value = $(this).attr("value");
  
    var inputRating = $("#rating");
    // console.log('subbu',$("#rating"))
    if (inputRating.val() === value) {
      // console.log('subbu',inputRating.val())
      inputRating.val(""); // Clear the rating if clicked on the already selected star
      $(this).removeClass('star-selected').prevAll().removeClass('star-selected');
    } else {
      inputRating.val(value);
  
      $(this).addClass('star-selected').prevAll().addClass('star-selected');
      $(this).nextAll().removeClass('star-selected');
    }
  });
  


// form validation

// Function to validate the Name field
function validateName() {
  var nameInput = $('#username').val();

  if (nameInput === '') {
    $('#name').text('Name is required.');
    $('#username').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    $('#valid1').text('');
    return false;
  } else if (!/^[A-Z][a-z]*[!@#$%^&*]?(\d{1,4}|[a-z]*)$/.test(nameInput)) {
    $('#name').text('Name should Start With Capital letter');
    $('#username').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    $('#valid1').text('');
    return false;
  } else if (nameInput.length < 3) {
    $('#name').text('Name should be at least 3 characters long.');
    $('#username').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    $('#valid1').text('');
    return false;
  } else {
    $('#name').text('');
    $('#valid1').text('Name is valid!');
    $('#username').css({ 'border-color': '2px solid green', 'box-shadow': '0 0 5px green' });
    return true;
  }
}


// function to validate phone number

function validatephone() {
  var phoneinput = $('#pnum').val();
  console.log(phoneinput)

  if (phoneinput === '') {
    $('#phone').text('Enter the Phonenumber');
    $('#valid4').text('');
    $('#pnum').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    return false;
  }
  else if (phoneinput.length > 10) {
    $('#phone').text('Enter the 10 digits');
    $('#valid4').text('');
    $('#pnum').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    return false;
  }
  else if (phoneinput.length < 10) {
    $('#phone').text('Enter the 10 digits');
    $('#valid4').text('');
    $('#pnum').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    return false;
  }
  else if (!/^[6-9]\d{9}$/.test(phoneinput)) {
    $('#phone').text('Number starts with 6,7,8,9');
    $('#valid4').text('');
    $('#pnum').css({ 'border-color': '2px solidred', 'box-shadow': '0 0 5px red' });
    return false;
  }
  else {
    $('#phone').text('')
    $('#valid4').text('p.number is valid')
    $('#pnum').css({ 'border-color': '2px solid green', 'box-shadow': '0 0 5px green' });
    return true;
  }

}


// valiate search

function validateProduct() {
  var productInput = $('#tags').val();

  if (productInput === '') {
    $('#fav').text('Enter the Favourite Product');
    $('#valid5').text('');
    $('#tags').css({ 'border-color': '2px solid red', 'box-shadow': '0 0 5px red' });
    return false;
  } else {
    $('#fav').text('');
    $('#valid5').text('Product input is valid');
    $('#tags').css({ 'border-color': '2px solid green', 'box-shadow': '0 0 5px green' });
    return true;
  }
}

// feed validation

function validateFeedback() {
  var feedbackInput = $('#inputMessage').val().trim();
  var minLength = 30;

  if (feedbackInput === '') {
    $('#feed').text('Enter your Feedback');
    $('#valid6').text('');
    $('#inputMessage').css({ 'border-color': '2px solid red', 'box-shadow': '0 0 5px red' });
    return false;
  } else if (feedbackInput.length < minLength) {
    $('#feed').text('Feedback should contain at least 30 characters');
    $('#valid6').text('');
    $('#inputMessage').css({ 'border-color': '2px solid red', 'box-shadow': '0 0 5px red' });
    return false;
  } else {
    $('#feed').text('');
    $('#valid6').text('Feedback is valid');
    $('#inputMessage').css({ 'border-color': '2px solid green', 'box-shadow': '0 0 5px green' });
    return true;
  }
}

// Event handler for input change
$('#username').on('input', function () {
  validateName();
 
   
      $('#pnum').on('input', function () {
        validatephone();
         
        $('#tag').on('input', function () {
          validateProduct();
          $('#tag').on('input', function () {
            validateFeedback();
          });
            });
          });
        });


        $('form').on('submit', function (e) {
          // Prevent form submission if the validation fails
          console.log(e)
          if (!validateName()) {
            
             
                if (!validatephone()) {
                
                  if (!validateProduct()) {
                    if (!validateFeedback()) {
                        e.preventDefault();
                      }
                    }
                    }
                  }
                });


$('#submitButton').on('click', function form() {
  

  if (validateName()) {
    
      
        if (validatephone()) {
          
          if (validateProduct()) {
            if (validateFeedback()) {
            var name = $("#username").val();
            var phone = $('#pnum').val();
             var star = $("#rating").val();
             var comment = $("#inputMessage").val();
             var str = ` Name: ${name} and  rating: ${star}  .Thankyou for Rating`
           
              $("#modal").html(str);
               
                
              var modal = new bootstrap.Modal($("#exampleModal"));
              modal.show();
            }
              }
            }
          }
        });

        $('#ok').click(function(){
          location.reload();
        })
        
        });
        