function add_str(list, s) {
  var sub_list = $('<li></li>');
  list.append(sub_list);
  sub_list.append("<span>" + s + "</span>");
  var button = $('<button>Удалить</button>')
  button.click(function() {
      $(this).parent().remove();
  });
  sub_list.append(button);
}

$(function() {
  var list = $('<ul></ul>');
  $("#root").append(list);
  var sub_list = $('<li></li>');
  list.append(sub_list);
  sub_list.append('<span>Сделать задание #3 по web-программированию</span>');
  var button = $('<button>Удалить</button>')
  button.click(function() {
      $(this).parent().remove();
  });
  sub_list.append(button);
  var inp = $('<input id=add_task_input></input>');
  $("#root").append(inp);
  var add_button = $('<button id=add_task>Ввод</button>');
  add_button.click(function() {
    add_str(list, inp.val());
  });
  $("#root").append(add_button);
});
