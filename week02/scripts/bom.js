let input = document.querySelector("#favchap"); // Use # for id
let button = document.querySelector("button");
let list = document.querySelector("#list");

button.addEventListener("click", function () {
    if (input.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = input.value;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "❌";
        deleteButton.addEventListener("click", function () {
            list.removeChild(li);
            input.focus();
        });

        li.append(deleteButton);
        list.append(li);

        input.value = "";
        input.focus();
    }
});
