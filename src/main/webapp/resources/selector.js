$(function(){
	var root = $('body');
	console.log("-----go-------");
	
// 复选框常用操作
	var div = $("<div/>");
	root.append(div);
//	div.html("div");
	var span = $('<span></span>');
	div.append(span);
	var a1 = $('<a href="#">全选 </a>')
	var a3 = $('<a href="#">反选 </a>')
	var a2 = $('<a href="#">全不选</a>')
	span.append(a1).append(a2).append(a3);
	var div1 = $('<div/>');
	div.append(div1);
	var ul = $('<ul></ul>');
	div1.append(ul);
	for (var i=0; i<8; i++) {
		ul.append('<li><input type="checkbox" />选择' +i+ '</li>');
	}
	$('a:contains("全选")').click(function() {
		console.log("全选");
		$('input:checkbox').prop('checked', 'checked');
	});
	$('a:contains("全不选")').click(function() {
		console.log("全不选");
		$('input:checkbox').prop('checked','');
	});
	
	$('a:contains("反选")').click(function() {
		console.log("反选");
		var inputs = $('input:checkbox');
		for (var i=0; i<inputs.length; i++) {
			var input = $(inputs[i]);
			if(input.prop('checked')){
				input.prop('checked','');
			} else {
				input.prop('checked','checked');;
			}
		}
	});
	
	
	
	
	
// 给一个表格隔行变色
/*	var tb = $("<table id='tb0' border='1' width='500px'><tr><th>M</th><th>N</th></tr></table>")
	$('body').append(tb);
	for (var i=0; i<9; i++) {
		var tr = $("<tr><td height='23px'></td><td></td></tr>");
		$('#tb0 tbody').append(tr);
	}
	$('#tb0 tbody tr:even').css("backgroundColor", "#888");*/
// 给段落添加点击事件
	
	/*for (var i=0; i< 5; i++) {
		$("body").append("<p>这是一个段落" + i + "</p>");
	}
	$('p').click(function(event){
		$(event.currentTarget).html("被点击过的段落")
	});*/
	
	
//----->表单选择器
//	$("input:file").css({background:"yellow", border:"3px red solid"});
//	$("input:disabled").val("this is disabled");
//	$("input:enabled").val("this is enabled");
//	$( "input" ).on( "click", function() {
//	  $( "#log" ).html( $("input:checked").val() + " is checked!" );
//	});	
	
//	$("form input:checkbox").wrap('<span></span>').parent().css({background:"yellow", border:"3px red solid"});
//	$(":button").addClass("marked");
//----->层次选择器	
//	$('#div-ul ~ div').css("border", "3px solid red");
//	$("label + input").css("color", "blue").val("Labeled!")
//	$('ul.topnav li').css("border", "3px double red");
//	$('ul.topnav > li').css("border", "3px double red");
//----->属性选择器	
//	$('a[hreflang]').css("border", "3px dotted BlueViolet")
//	$('a[hreflang^="k"]').css("border", "3px dotted Aqua")
//	$('a[hreflang!="en"]').css("border", "3px dotted Aquamarine")
//	$('a[hreflang$="en"]').css("border", "3px dotted black")
//	$('a[hreflang$="oo"]').css("border", "3px dotted pink")
//	$('a[hreflang~="key"]').css("border", "3px dotted red")
//	$('a[hreflang*="eng"]').css("border", "3px dotted blue")
//	$('a[hreflang|="en"]').css("border", "3px dotted green")
	
	
//-------基本选择器	
//	$('.div_class').css("border", "3px solid red");
//	$('button').css("border", "3px solid blue");
//	$('p, span').css("border", "3px solid green");
	
//	var count = $('#test').find('*').css("border", "3px solid red").length;
//	$('body').prepend("<h3>test DIV 中有" + count + " HTML元素</h3>")
	
	
//	var count = $("*").css("border", "3px solid red").length;
//	$('body').prepend("<h3>一共有" + count + " HTML元素</h3>")
});