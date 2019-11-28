$(document).ready(function () {
    addEventListener()
    restoreTaskList()
})


function restoreTaskList() {
    let data = localStorage.getItem("task")
    let data2 = localStorage.getItem("task-time")
    let data3 = localStorage.getItem("task-date")
    if (data) {
        let restoreList = JSON.parse(data)
        let restoreList1 = JSON.parse(data)
        let restoreList2 = JSON.parse(data)
        console.log(restoreList)
        for (var i = 0; i < (restoreList.length); i++) {
            $("ul").append("<li>" + restoreList[i] + "</li>")
        }
    } else {
        restoreList = []
    }
}

function addEventListener() {
    $(":submit").click(addTask)
}

function addTask() {
    let task = $(":text").val()
    let taskDate = $("#taskDate").val() //Why cant I use type here ?
    let taskTime = $("#taskTime").val() // Why cant i use type here ?

    $("ul").append("<li>" + task + " " + taskTime + " " + taskDate + "</li>")

    const listOfTasks = []
    $("ul li").each(function () { listOfTasks.push($(this).text()) })

    var fields = {};
    $("#theForm").find(":input").each(function () {
        // The selector will match buttons; if you want to filter
        // them out, check `this.tagName` and `this.type`; see
        // below
        fields[this.name] = $(this).val();
    });
    var taskItems = { fields: fields };

    console.log(listOfTasks)
    saveTaskToLS("task", listOfTasks)
    saveTaskToLS("task-time", taskTime)
    saveTaskToLS("task-date", taskDate)

    addPrefix()
    addSuffix()

    $(":text").val("")

}

function addPrefix() {

}

function addSuffix() {

}

function removeTask() {
    getTaskFromLS()
}


function saveTaskToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getTaskFromLS(key) {
    return console.log(JSON.parse(localStorage.getItem(key)) || [])
}

function clearTaskFromLS() {
    localStorage.clear()
}