function sendMessage(nameSel, msgSel, cls) {
    var name = $(nameSel).val().trim();
    var text = $(msgSel).val().trim();
    if (name === "" || text === "") return;

    var $msg = $("<div>").addClass("msg " + cls);
    $("<div>").addClass("msg-name").text(name).appendTo($msg);
    $("<div>").text(text).appendTo($msg);

    $("#chat-section").append($msg).scrollTop($("#chat-section")[0].scrollHeight);
    $(msgSel).val("").focus();
}

$("#btnOther").click(function () {
    sendMessage("#nameOther", "#msgOther", "msg-other");
});

$("#btnMe").click(function () {
    sendMessage("#nameMe", "#msgMe", "msg-me");
});

// Enter = kirim, Shift+Enter = baris baru
$("#msgOther").keydown(function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        $("#btnOther").click();
    }
});

$("#msgMe").keydown(function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        $("#btnMe").click();
    }
});