$(document).ready(function(){

    $('#root .navbar-brand.menu').click(function(){

        // $('#leftMenu').on('shown.bs.modal', function (e) {
        //     // $(this).find('.modal-content').show();
        // });


        $('#leftMenu').modal('show');
    });

});