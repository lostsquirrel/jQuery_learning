$(function(){
    
    var body = $('body');
    var show = $('<div class="v_show"></div>');
    body.prepend(show);
    var caption = $('<div class="v_caption"></div>');
    var content = $('<div class="v_content"></div>');
    show.append(caption, content);
    var h2 = $('<h2 class="cartoon" title="卡通动漫">卡通动漫</h2>');
    var tip = $('<div class="highlight_tip"></div>');
    for (var i=1; i<=4; i++) {
    	if (i == 1) {
    		tip.append('<span class="current">'+ i +'</span>');
    	} else {
    		tip.append('<span>'+ i +'</span>');
    	}
    }
    var btn = $('<div class="change_btn"></div>');
    btn.append('<span class="prev">上一页</span>')
    	.append('<span class="next">上一页</span>');
    caption.append(h2,tip,btn)
    	.append('<em><a href="#">更多>></a></em>');
    	
    var list = $('<div class="v_content_list"></div>');
    var ul = $('<ul></ul>');
	list.append(ul);
	ul.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Desert.jpg" /></a> <a href="#"><h5>Desert</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Hydrangeas.jpg" /></a> <a href="#"><h5>Hydrangeas</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Hydrangeas.jpg" /></a> <a href="#"><h5>Hydrangeas</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Hydrangeas.jpg" /></a> <a href="#"><h5>Hydrangeas</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Hydrangeas.jpg" /></a> <a href="#"><h5>Hydrangeas</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Jellyfish.jpg" /></a> <a href="#"><h5>Jellyfish</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Jellyfish.jpg" /></a> <a href="#"><h5>Jellyfish</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Jellyfish.jpg" /></a> <a href="#"><h5>Jellyfish</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/jh.jpg" /></a> <a href="#"><h5>jh</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/jh.jpg" /></a> <a href="#"><h5>jh</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/jh.jpg" /></a> <a href="#"><h5>jh</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Koala.jpg" /></a> <a href="#"><h5>Koala</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Koala.jpg" /></a> <a href="#"><h5>Koala</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Koala.jpg" /></a> <a href="#"><h5>Koala</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Lighthouse.jpg" /></a> <a href="#"><h5>Lighthouse</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Lighthouse.jpg" /></a> <a href="#"><h5>Lighthouse</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Lighthouse.jpg" /></a> <a href="#"><h5>Lighthouse</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Penguins.jpg" /></a> <a href="#"><h5>Penguins</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Penguins.jpg" /></a> <a href="#"><h5>Penguins</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Penguins.jpg" /></a> <a href="#"><h5>Penguins</h5><span>计数:<em>1</em></span></a></li>')
    	.append('<li><a href="#"><img src="/jQuery-learning/resources/img/Tulips.jpg" /></a> <a href="#"><h5>Tulips</h5><span>计数:<em>1</em></span></a></li>');
    content.append(list);
    
    
    var page = 1;
    var pageSize = 4;
    var width = content.width();
    var len = list.find('li').length;
    if (len > 16) len = 16;
    var page_count = Math.ceil(len/pageSize);
    
    $('span.next').click(function(){
    	if (!list.is(':animated')) {
    		if (page == page_count) {
    			list.animate({left : '0px'}, 'slow');
    			page = 1;
    		} else {
    			list.animate({left : '-='+width}, 'slow');
    			page++;
    		}
    	}
    	show.find('span').eq(page - 1).addClass('current').siblings().removeClass('current');
    	
	});
	$('span.prev').click(function(){
		console.debug("------------");
		if (!list.is(':animated')) {
			if (page == 1) {
				list.animate({left : '-='+width*(page_count -1)}, "slow");
				page = page_count;
			}else {
				list.animate({left : '+='+width}, 'slow');
				page--;
			}
		}
		show.find('span').eq(page - 1).addClass('current').siblings().removeClass('current');
    });
});