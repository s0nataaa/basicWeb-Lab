"use strict";

// Data
let students = [];
let currentFilter = "all";

// DOM elements
const form = document.getElementById("add-form");
const studentName = document.getElementById("add-student-name");
const studentId = document.getElementById("add-student-id");
const studentScore = document.getElementById("add-student-score");
const errorBox = document.getElementById("form-error");
const list = document.getElementById("student-list");
const gradeFilter = document.getElementById("grade-filter");

// Form submission
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = studentName.value.trim();
    const id = studentId.value.trim();
    const scoreText = studentScore.value.trim();
    const score = Number(scoreText);

    if (name === "") {
        errorBox.textContent = "Must input student name";
        return;
    }
    if (id === "") {
        errorBox.textContent = "Must input student ID";
        return;
    }
    if (students.some(function (s) { return s.id === id; })) {
        errorBox.textContent = "Student ID already exists";
        return;
    }
    if (scoreText === "" || isNaN(score) || score < 0 || score > 100) {
        errorBox.textContent = "Score must be between 0 and 100";
        return;
    }

    errorBox.textContent = "";
    students.push({
        id: id,
        name: name,
        score: score,
        grade: calculateGrade(score)
    });
    studentName.value = "";
    studentId.value = "";
    studentScore.value = "";
    render();
});

// Grade calculation
function calculateGrade(score) {
    if (score >= 85) return "A";
    if (score >= 75) return "B";
    if (score >= 65) return "C";
    if (score >= 50) return "D";
    return "E";
}

// Render table
function render() {
    list.innerHTML = "";

    const visible = students.filter(function (s) {
        return currentFilter === "all" || s.grade === currentFilter;
    });

    if (visible.length === 0) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.colSpan = 6;
        td.className = "text-center text-muted";
        td.textContent = "No students available";
        tr.appendChild(td);
        list.appendChild(tr);
    }

    visible.forEach(function (s, index) {
        const tr = document.createElement("tr");
        tr.dataset.id = s.id;

        const values = [index + 1, s.id, s.name, s.score, s.grade];
        values.forEach(function (v) {
            const td = document.createElement("td");
            td.textContent = v;
            tr.appendChild(td);
        });

        const tdAct = document.createElement("td");
        const del = document.createElement("button");
        del.type = "button";
        del.className = "btn btn-sm btn-outline-danger student-delete";
        del.textContent = "Delete";
        tdAct.appendChild(del);
        tr.appendChild(tdAct);

        list.appendChild(tr);
    });

    updateStats();
}

// Statistics
function updateStats() {
    let total = students.length;
    let average = 0;
    let highest = 0;
    let lowest = 0;

    if (total > 0) {
        const scores = students.map(function (s) { return s.score; });
        const sum = scores.reduce(function (a, b) { return a + b; }, 0);
        average = Math.round((sum / total) * 100) / 100;
        highest = Math.max(...scores);
        lowest = Math.min(...scores);
    }

    document.getElementById("stat-total").textContent = total;
    document.getElementById("stat-average").textContent = average;
    document.getElementById("stat-highest").textContent = highest;
    document.getElementById("stat-lowest").textContent = lowest;
}

// Deletion (event delegation)
list.addEventListener("click", function (e) {
    if (!e.target.classList.contains("student-delete")) return;
    const tr = e.target.closest("tr[data-id]");
    students = students.filter(function (s) { return s.id !== tr.dataset.id; });
    render();
});

// Grade filter
gradeFilter.addEventListener("change", function (e) {
    currentFilter = e.target.value;
    render();
});

// Initial render
render();