$(document).ready(function(){
$("#root").append("<ul type = "circle" id = "list"> </ul>")
$("#list").append("<li class = "element"><span>Сделать задание №3 по web-программированию</span></li>")
$(".element").append("<button class = "delete">Удалить</button>")
$("body").on("click", ".delete", function(){
$(this).parent().remove()
})
$("#root").append("<input id = "add_task_input"></input>").append("<button id = "add_task">Добавить</button>")
$("#add_task").click(function(){
$("#tasklist").append("<li class = "element"><span>" + $("#add_task_input").val() + "</span><button class = "delete">Удалить</button></li>")
}) 
$("body").keyup(function(eventObject){
if (eventObject.which === 1) {
$("#tasklist").append("<li class = "element"><span>" + $("#add_task_input").val() + "</span><button class = "delete">Удалить</button></li>")
}
})
})
