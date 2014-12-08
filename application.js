//Panes
$('#MainSplit').split({orientation:'vertical', limit:100, position:'50%'});

//Flat UI Dropdowns
$("select").select2({dropdownCssClass: 'dropdown-inverse'});

// Some general UI pack related JS
// Extend JS String with repeat method
String.prototype.repeat = function (num) {
  return new Array(Math.round(num) + 1).join(this);
};

//Flat UI Helpers
(function ($) {

  // Add segments to a slider
  $.fn.addSliderSegments = function () {
    return this.each(function () {
      var $this = $(this),
          option = $this.slider('option'),
          amount = (option.max - option.min)/option.step,
          orientation = option.orientation;
      if ( 'vertical' === orientation ) {
        var output = '', i;
        console.log(option.step);
        for (i = 1; i <= amount - 1; i++) {
            output += '<div class="ui-slider-segment" style="top:' + 100 / amount * i + '%;"></div>';
        }
        $this.prepend(output);
      } else {
        var segmentGap = 100 / (amount) + '%';
        var segment = '<div class="ui-slider-segment" style="margin-left: ' + segmentGap + ';"></div>';
        $this.prepend(segment.repeat(amount - 1));
      }
    });
  };

  //Sortable Lists
$(function () {
    $(".list-sortable").sortable({
        tolerance: 'pointer',
        containment: "parent",
        revert: 'invalid',
        placeholder: 'span2 well placeholder tile',
        forceHelperSize: true,
        axis: "x"
    });
    $(".list-sortable").disableSelect();
});

  $(function () {

    // jQuery UI Sliders
    var $slider1 = $('#slider1');
    if ($slider1.length > 0) {
      $slider1.slider({
        max: 15,
        step: 1,
        value: 6,
        orientation: 'horizontal',
        range: 'min'
      }).addSliderSegments();
      // $('#setSize').html('Size: '+$slider1.step);
    }

    var $slider2 = $('#slider2');
    if ($slider2.length > 0) {
      $slider2.slider({
        max: 15,
        step: 1,
        value: 6,
        orientation: 'horizontal',
        range: 'min'
      }).addSliderSegments();
      // $('#setSpeed').html('Speed: '+$slider2.step);
    }

  });

})(jQuery);

