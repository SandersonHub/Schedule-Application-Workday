$(function() {
  // Fetches the local time for of the subjects computer an order to keep the schdule up to date. 
  var currentHour = dayjs().format('H');

  // eventListener for the save button, using the time-block ID.
  $('.saveBtn').on('click', function() {
    var timeBlockId = $(this).parent().attr('id');
    var userInput = $(this).siblings('.description').val();
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply the appropriate class to each time block
  $('.time-block').each(function() {
    var hour = parseInt($(this).attr('id').split('-')[1]);

// displays if the time past present or futrue. 
    if (hour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (hour === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });

  // Local storage for whatever the user inputs
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var userInput = localStorage.getItem(timeBlockId);
    $(this).find('.description').val(userInput);
  });

  // This is for the header date and time at the top of the page.
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(currentDate);
});

