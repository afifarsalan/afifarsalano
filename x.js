document.getElementById('part1').addEventListener('click', function() {
    var taskbar = document.getElementById('taskbar');
    if (taskbar.style.display === "none") {
        taskbar.style.display = "block";
    } else {
        taskbar.style.display = "none";
    }
});