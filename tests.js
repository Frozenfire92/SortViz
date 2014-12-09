//Sortable Lists
$(function () {
    $(".list-sortable").sortable({
        //tolerance: 'pointer',
        containment: "parent",
        //revert: 'invalid',
        //placeholder: 'span2 well placeholder tile',
        //forceHelperSize: true,
        axis: "x"
    });
});
