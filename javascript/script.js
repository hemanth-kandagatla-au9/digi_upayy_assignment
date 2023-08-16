const teams = {
    teamA: [
        { name: "Alice", priority: 1 },
        { name: "Bob", priority: 2 },
        { name: "Charlie", priority: 3 }

    ],
    teamB: [
        { name: "David", priority: 1 },
        { name: "Eve", priority: 2 },
        { name: "Frank", priority: 3 }

    ]
};

let taskIndex = 0;
const assignedTasks = {};

function assignTask() {
    const taskInput = document.getElementById("taskInput").value;
    const teamSelect = document.getElementById("teamSelect");
    const selectedTeam = teamSelect.value;

    if (!assignedTasks[selectedTeam]) {
        assignedTasks[selectedTeam] = [];
    }

    const teamMembers = teams[selectedTeam];
    const memberIndex = taskIndex % teamMembers.length;
    const assignedMember = teamMembers[memberIndex];

    assignedTasks[selectedTeam].push({ task: taskInput, member: assignedMember });

    updateTaskList();
    taskIndex++;
}

function updateTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    for (const team in assignedTasks) {
        for (const assignedTask of assignedTasks[team]) {
            const li = document.createElement("li");
            li.textContent = `${team} - ${assignedTask.member.name}: ${assignedTask.task}`;
            taskList.appendChild(li);
        }
    }
}

const assignButton = document.getElementById("assignButton");
assignButton.addEventListener("click", assignTask);
