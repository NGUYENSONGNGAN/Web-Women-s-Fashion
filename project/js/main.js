$(document).ready(function () {
    $('ul#list_item li.box_iteam').click(function () {

        let picture_src = $(this).find('img').attr('src');

        $('#show_picture img').attr('src', picture_src);

        $('ul#list_item li.box_iteam').removeClass('active');
        $(this).addClass('active');

    });
    $('.fa-chevron-right').click(function () {
        if ($('ul#list_item li.box_iteam:last-child').hasClass('active')) {
            $('ul#list_item li.box_iteam:first-child').click();
        }
        else {
            $('ul#list_item li.box_iteam.active').next().click();
        }
    });
    $('.fa-chevron-left').click(function () {
        if($('ul#list_item li:first-child').hasClass('active'))
        {
            -p
            
        }
      /*   if ($('ul#list_item li.box_iteam:first-child').hasClass('active')) {
            $('ul#list_item li.box_iteam:last-child').click();
        }
        else {
            $('ul#list_item li.box_iteam.active').prev().click();
        } */
    });
    $('ul#list_item li.box_iteam:first-child').click();
});