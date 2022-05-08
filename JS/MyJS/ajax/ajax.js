//AJAX
function ajax(type,link,data,token) {
 ['successAjax', 'errorAjax'].forEach(function(key) {local("del",key)});
 $.ajax({
  async: false,
  type: type,
  url: link,
  headers: {"Authorization": "Bearer " + token},
  data: data,
  success: function(response){session("set","successAjax", JSON.stringify(response))},
  error: function(response){session("set","errorAjax", JSON.stringify(response))},
 });
};

//ajaxOnlyGET
function ajaxOnlyGET(link) {
 ['successAjax', 'errorAjax'].forEach(function(key) {local("del",key)});
 $.ajax({
  async: false,
  type: 'GET',
  url: link,
  success: function(response){session("set","successAjax", JSON.stringify(response))},
  error: function(response){session("set","errorAjax", JSON.stringify(response))},
 });
};
