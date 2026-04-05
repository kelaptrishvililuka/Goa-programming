class TaskApp {
    constructor() {
        this.input = document.getElementById("taskField");
        this.list = document.getElementById("taskList");
        this.count = document.getElementById("taskCount");
        this.button = document.getElementById("addBtn");

        this.tasks = 0;

        this.button.onclick = () => {
            this.addTask();
        }

        this.input.addEventListener("keypress", (e) => {
            if (e.key === "Enter") {
                this.addTask();
            }
        })

    }

    addTask() {

        let value = this.input.value.trim();

        if (value === "") {
            return;
        }

        let li = document.createElement("li");
        li.className = "task";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        let text = document.createElement("span");
        text.textContent = value;

        let del = document.createElement("button");
        del.className = "delete";

        let icon = document.createElement("ion-icon");
        icon.name = "trash-outline";

        del.appendChild(icon);

        li.append(checkbox, text, del);

        this.list.appendChild(li);

        this.input.value = "";

        this.tasks++;
        this.update();

        checkbox.addEventListener("change", () => {

            li.classList.toggle("done");

            if (checkbox.checked) {
                this.tasks--;
            } else {
                this.tasks++;
            }

            this.update();

        });

        del.onclick = () => {
            li.remove();
            this.tasks--;
            if (this.tasks < 0) {
                this.tasks = 0;
            }
            this.update();
        }

    }

    update() {
        this.count.textContent = this.tasks;
    }

}

new TaskApp();