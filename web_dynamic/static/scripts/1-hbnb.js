$(document).ready(function () {
  let amenity_ids = [];
  $('DIV#amenities input[type="checkbox"]').on('change', function (event) {
    const amenity_id = $(this).data('id');

    if (event.target.checked) {
      amenity_ids.push(amenity_id);
    } else {
      const index = amenity_ids.indexOf(amenity_id);
      if (index !== -1) {
        amenity_ids.splice(index, 1);
      }
    }

    $('DIV#amenities H4').text(amenity_ids.join(', '));
  });
});
