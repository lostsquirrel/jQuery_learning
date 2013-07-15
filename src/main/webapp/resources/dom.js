$(function(){
	var body = $('body');
	var a_1 = $('<a href="#" class="tooltip" title="超链接提示1">超链接1</a>')
	var a_2 = $('<a href="#" class="tooltip" title="超链接提示2">超链接2</a>')
	var a_3 = $('<a href="#" title="自带提示1">超链接3</a>')
	var a_4 = $('<a href="#" title="自带提示2">超链接4</a>')
	body.append(a_1,a_2,a_3,a_4);
	$('body > a').wrap('<p></p>');
	$('a.tooltip').mouseover(function(e) {
		var tooltip = "<div id='tooltip'>"+this.title+"</div>";
		this.myTitle = this.title;
		this.title = '';
		body.append(tooltip);
		$('#tooltip')
			.css('position', 'absolute')
			.css("top", e.pageY+20 + "px")
			.css("left", e.pageX+10 + "px")
			.show("fast");
		
	}).mouseout(function(){
		this.title = this.myTitle;
		$('#tooltip').remove();
	});
	
	
	/*var div = $("<div></div>");
	body.append(div);
	var ul = $("<ul></ul>");
	div.append(ul);
	var li_1 = $("<li></li>");
	var li_2 = $("<li></li>");
	ul.append(li_1).append(li_2);
	li_1.text("香蕉");
	li_2.text("雪梨");*/
});