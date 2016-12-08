		$(function(){
			
			var $nav = $('.nav')
			var $list_r = $('.list_r')
			//划过弹出新导航
			$nav.on('mouseenter','.flybox',function(){
				$list_r.css({
					'opacity':'1',
					'display':'block'	
				})
			}).on('mouseleave','.flybox',function(){
				$list_r.css('opacity','0')
			}).on('mouseenter','.list_r',function(){
				$list_r.css({
					'opacity':'1',
					'display':'block'	
				})
			}).on('mouseleave','.list_r',function(){
				$list_r.css({
					'opacity':'0',
					'display':'none'
				})
			})
			
			//right_topic
			var $right_topic = $('.right_topic');
			var $kefutell = $right_topic.find('.kefutell')
			$right_topic.on('mouseenter','.right_phone',function(){
				$kefutell.animate({
					left:-230,
					opacity:1
					},1000);
			}).on('mouseleave','.right_phone',function(){
				$kefutell.animate({
					left:-300,
					opacity:0
					},1000);
			})
				render();
			//点击删除
				$('.boxx').on('click','.span3',function(){
					var $li = $(this).closest('li');
					console.log($li)
					var goods = $li.attr('data-goodsname');
					//把时间设置成昨天
					var now = new Date();
					now.setDate(now.getDate()-1);
					//删除cookie
					document.cookie = goods + '=null;expires=' + now;
					//移除html
					$li.remove();
					$('.box3').show();
				})
		
				<div class="boxx">
					<input class="checked" type="checkbox"/>
					<h2>
						<img/><span>维您酵素饮品</span>
					</h2>
					<span class="span1">￥79</span>
					<button class="button1">-</button>
					<input class="text" placeholder="1" type="text"/>
					<button class="button2">+</button>
					<span class="span2">￥79</span>
					<span class="span3 btn_close">x删除</span>
				</div>
	
			function render(){
				var _cookie = document.cookie.split(';');
				//遍历cookie
				var $ul = $('<ul/>');
				var subPrice = 0;
				var many = 0;
				if(_cookie !=''){
					$('.box3').hide()
					$.each(_cookie,function(idx,val){
						var info = JSON.parse(val.split('=')[1]);
						var  $li = $('<li/>').attr('data-goodsname',val.split('=')[0]);
						var $input1 = $('<input/>').addClass('checked').attr({'type':'checkbox','checked':'checked'});
						var $input2 = $('<input/>').addClass('text').attr('type','text').val(info.qty);
						var $h2 = $('<h2/>').text(info.name);
						var $img = $('<img/>').attr('src',info.imgurl);
						var $btnClose = $('<span/>').addClass('span3').html('&times;删除')
						var $price = $('<span/>').addClass('span1').html('&yen;' + info.price);
						var $price1 = $('<span/>').addClass('span2').html('&yen;' + subPrice);
						var $button1 =$('<button/>').addClass('button1').html('-');
						var $button2 =$('<button/>').addClass('button2').html('+');
						$h2.append($img);
						$li.append([$input1,$input2,$h2,$btnClose,$price,$price1,$button1,$button2]).appendTo($ul);
						//计算总价
						subPrice += info.price * info.qty;
						$price1.html('&yen;' + subPrice);
						many = info.qty
						$('.box4').find('b').html('&yen;' + subPrice);
						$('.box4').find('strong').html(info.qty);
					});
				}
				$('#boxx').empty();
				$ul.appendTo('.boxx');
			}
			
		})
