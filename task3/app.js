function CreateandAdd(s) {
var element = $('<li><span></span> <button class="deleteb">Удалить</button></li>');
$('span', element).text(s);
$('#root ul').append(element);
$('.deleteb', element).click(function(delq){
$(this).parent().remove()});
}
$(function(){
$('#root').append('<ul></ul>');
$('#root').append('<input id="add_task_input">')
$('#root').append('<button id="add_task">Добавить</button>');
$('#add_task').click(function(){
CreateandAdd($('#add_task_input').val())
}
);
CreateandAdd("Сделать задание #3 по web-программированию");
});

