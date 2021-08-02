$(function () {
    $("#btnSearch").click(function (e) {
        e.preventDefault();
        $.ajax({
            url: "http://localhost:7071/api/FindPlate?q=" + $("#q").val(),
            success: function (e) {
                $("#result").html(e);
            }
        });
    });
});