<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script type="text/javascript" src="/jQuery-learning/resources/jquery-1.10.1.js"></script>
<script type="text/javascript" >
	$(function(){
		$(':input').focus(function(){
			$(this).addClass("focus");
		}).blur(function(){
			$(this).removeClass("focus");
		});

		var brief = $('#brief');
		$('span.bigger').click(function(){
			if (brief.height() < 500) {
				brief.animate({'height': '+=50'});
			}
		});
		$('span.smaller').click(function(){
			if (brief.height() > 100) {
				brief.animate({'height': '-=50'});
			}
		});
		$('span.up').click(function(){
			if (brief.height() > 100) {
				brief.animate({'scrollTop': '-=50'});
			}
		});
		$('span.down').click(function(){
			if (brief.height() > 100) {
				brief.animate({'scrollTop': '+=50'});
			}
		});
		
	});
</script>
<title>Input</title>
<style>

input:focus, textare:focus {
	border: 1px solid #f00;
	background: #fcc;
}
.focus {
	border: 1px solid #f00;
	background: #fcc;
}
textarea {
	resize: none;
	width: 500px;
}
span {
	background-color:yellow;
}
</style>
</head>
<body>
	<p><a href="/jQuery-learning">返回首页</a></p>
	<fieldset>
		<legend>个人信息</legend>
		<div>
	<label>用户名</label>
	<input type="text" name="username"/>
	</div>
	<div>
		<label>密码</label>
		<input type="password" name="password"/>
	</div>
	<div>
		<label>简述</label>
		<div>
			<div>
				<span class="bigger">放大</span>
				<span class="smaller">缩小</span>
				<span class="up">向上</span>
				<span class="down">向下</span>
			</div>
			<textarea id="brief"></textarea>
		</div>
	</div>
	</fieldset>
</body>
</html>