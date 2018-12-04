var com = document.getElementById("com"),
    comText = document.getElementById("com_text"),
    add = document.getElementById("add"),
    edit = document.getElementById("edit");

add.addEventListener("click", function() {
    if (document.getElementById("com").value === "") {
        com.style.display = "block";
    } else {
        comText.innerHTML = document.getElementById("com").value;
        com.style.display = "none";
        edit.style.display = "block";
        add.style.display = "none";
    }
});
edit.addEventListener("click", function() {
    comText.innerHTML = "";
    com.style.display = "block";
    edit.style.display = "none";
    add.style.display = "block";

});