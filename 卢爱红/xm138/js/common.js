function hearder(){//hearder-top3_catalog头部纵向导航
	$('.catalog').hover(function() { 
		$(this).addClass('Hover');//.catalog.Hover menu-cate-all-out{display:black}
	},function() {
		$(this).removeClass('Hover');
		$('.menu-cate-all-out dl').removeClass('on');
	})	  
	$('.menu-cate-all-out dt').mouseover(function(){
		$('.menu-cate-all-out dl').removeClass('on');//移除其他的dl样式
   		$(this).parent().addClass('on');//查找dl，添加on，显示dt  
	})
}
