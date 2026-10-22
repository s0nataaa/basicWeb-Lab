"use strict";

// Task data
let tasks = [];
let nextId = 1;
let currentFilter = "all";

// DOM elements
const form = document.getElementById("task-form");
const titleInput = document.getElementById("task-title");
const categoryInput = document.getElementById("task-category");
const dateInput = document.getElementById("task-date");
const errorBox = document.getElementById("form-error");
const list = document.getElementById("task-list");
const filters = document.getElementById("filters");

// Form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = titleInput.value.trim();
    const category = categoryInput.value;

    if (title === "") {
        errorBox.textContent = "Task title tidak boleh kosong.";
        return;
    }
    if (category === "") {
        errorBox.textContent = "Pilih category dulu.";
        return;
    }

    errorBox.textContent = "";
    tasks.push({
        id: nextId++,
        title: title,
        category: category,
        dueDate: dateInput.value,
        completed: false
    });
    titleInput.value = "";
    render();
});

// Render tasks
function render() {
    list.innerHTML = "";

    const visible = tasks.filter(function (t) {
        if (currentFilter === "active") return !t.completed;
        if (currentFilter === "completed") return t.completed;
        return true;
    });

    if (visible.length === 0) {
        const empty = document.createElement("li");
        empty.className = "list-group-item text-center text-muted";
        empty.textContent = "No tasks available";
        list.appendChild(empty);
    }

    visible.forEach(function (t) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex align-items-center" +
            (t.completed ? " task-completed" : "");
        li.dataset.id = t.id;

        const check = document.createElement("input");
        check.type = "checkbox";
        check.className = "form-check-input task-check";
        check.checked = t.completed;

        const info = document.createElement("div");
        info.className = "flex-grow-1";

        const title = document.createElement("div");
        title.className = "task-title";
        title.textContent = t.title;

        const meta = document.createElement("small");
        meta.className = "text-muted";
        meta.textContent = t.category + " · " + (t.dueDate || "No due date") +
            " · " + (t.completed ? "Completed" : "Active");

        info.append(title, meta);

        const del = document.createElement("button");
        del.type = "button";
        del.className = "btn btn-sm btn-outline-danger task-delete";
        del.textContent = "Delete";

        li.append(check, info, del);
        list.appendChild(li);
    });

    updateStats();
}

// Update statistics
function updateStats() {
    const completed = tasks.filter(function (t) { return t.completed; }).length;
    document.getElementById("stat-total").textContent = tasks.length;
    document.getElementById("stat-active").textContent = tasks.length - completed;
    document.getElementById("stat-completed").textContent = completed;
}

// Completion and deletion (event delegation)
list.addEventListener("click", function (e) {
    const li = e.target.closest("li[data-id]");
    if (!li) return;
    const id = Number(li.dataset.id);

    if (e.target.classList.contains("task-delete")) {
        tasks = tasks.filter(function (t) { return t.id !== id; });
        render();
    } else if (e.target.classList.contains("task-check")) {
        const task = tasks.find(function (t) { return t.id === id; });
        task.completed = e.target.checked;
        render();
    }
});

// Filters
filters.addEventListener("click", function (e) {
    const btn = e.target.closest("button[data-filter]");
    if (!btn) return;
    currentFilter = btn.dataset.filter;
    filters.querySelectorAll("button").forEach(function (b) {
        b.classList.toggle("active", b === btn);
    });
    render();
});

// Initial render
render();