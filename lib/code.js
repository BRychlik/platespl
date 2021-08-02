$(function () {
    $("#btnSearch").click(function (e) {
        e.preventDefault();
        $.ajax({
            url: endPointUrl + "?q=" + $("#q").val(),
            success: function (e) {
                $("#result").html(e);
            }
        });
    });
});