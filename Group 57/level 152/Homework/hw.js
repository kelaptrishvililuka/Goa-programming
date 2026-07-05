class TaskApp {
    constructor() {
        this.input = document.getElementById("taskField");
        this.list = document.getElementById("taskList");
        this.count = document.getElementById("taskCount");
        this.button = document.getElementById("addBtn");

        this.tasks = 0;

        this.button.onclick = () => this.addTask();

        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") this.addTask();
        });
    }

    addTask() {
        let value = this.input.value;

        if (value === "") return;

        let li = document.createElement("li");
        li.className = "task";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let text = document.createElement("span");
        text.textContent = value;

        let edit = document.createElement("button");
        edit.textContent = "edit";

        let del = document.createElement("button");
        del.textContent = "remove";

        li.append(checkbox, text, edit, del);
        this.list.appendChild(li);

        this.input.value = "";

        this.tasks++;
        this.update();

        checkbox.onchange = () => {
            li.classList.toggle("done");

            if (checkbox.checked === true) {
                this.tasks = this.tasks - 1;
            } else {
                this.tasks = this.tasks + 1;
            }

            this.update();
        };

        del.onclick = () => {
            li.remove();

            this.tasks = this.tasks - 1;

            if (this.tasks < 0) {
                this.tasks = 0;
            }

            this.update();
        };

        edit.onclick = () => {
            let inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = text.textContent;

            li.replaceChild(inputField, text);

            inputField.focus();

            const save = () => {
                if (inputField.value !== "") {
                    text.textContent = inputField.value;
                }

                li.replaceChild(text, inputField);
            };

            inputField.addEventListener("keypress", (e) => {
                if (e.key === "Enter") save();
            });

            inputField.addEventListener("blur", () => {
                save();
            });
        };
    }

    update() {
        this.count.textContent = this.tasks;
    }
}

new TaskApp();