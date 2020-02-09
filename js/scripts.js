$(document).ready(function () {
    $("form.places").submit(function (event) {
        event.preventDefault();

        let input1 = $("#location").val();
        let input2 = $("#landmark").val();
        let input3 = $("#time").val();
        let input4 = $("#note").val();





        $("#result").append(inputSentence);

    });
});