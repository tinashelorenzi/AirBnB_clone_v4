$(document).ready(function () {
  const amenityIds = [];
  $('DIV#amenities input[type="checkbox"]').on('change', function (event) {
    const amenityId = $(this).data('id');

    if (event.target.checked) {
      amenityIds.push(amenityId);
    } else {
      const index = amenityIds.indexOf(amenityId);
      if (index !== -1) {
        amenityIds.splice(index, 1);
      }
    }

    $('DIV#amenities H4').text(amenityIds.join(', '));
  });
});
