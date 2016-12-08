$(function(){
			var $banner = $('.banner') 
			var $banner_top = $('.banner_top img');
			var $banner_bottom = $('.banner_bottom div');
			var index = 0;
			var timer = setInterval(foucs,2000);
			var $next = $banner.find('.banner_right')
			var $prev = $banner.find('.banner_left')
			
			$banner.on('mouseenter',function(){
				clearInterval(timer);
				$next.css('opacity','0.5')
				$prev.css('opacity','0.5')
			}).on('mouseleave',function(){
				timer = setInterval(foucs,2000);
				$next.css('opacity','0')
				$prev.css('opacity','0')
			})
			//点击左右实现图片翻转
			$next.on('click',function(){
				index++
				show()
			})
			$prev.on('click',function(){
				index--
				show()
			})
			//小图绑定事件
			$banner_bottom.on('mouseenter',function(){
				index = $(this).index();
				show()
			})
			
			function foucs(){
				index++;
				show()
			}
			//显示图片
			function show(){
				if(index>$banner_top.length-1){
					index = 0
				}
				if(index<0){
					index = $banner_top.length-1
				}
				$banner_top.eq(index).animate({opacity:1}).siblings().animate({opacity:0});
				$banner_bottom.eq(index).animate({opacity:1}).siblings().animate({opacity:0});
				
			}
			
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
				$kefutell.show();
				$kefutell.animate({
					left:-230,
					opacity:1
					},1000);
			}).on('mouseleave','.right_phone',function(){
				$kefutell.animate({
					left:-300,
					opacity:0
					},1000);
					$kefutell.hide();
			})
			//main图片左晃动
			var $main = $('.main');
			var $Img = $main.find('img');
			$main.on('mouseenter','.picture_r',function(){
				$(this).find('img').animate({
					left:-20
				});
				$(this).find('.addtext,.addtext_new').css('background','#eeafce')
				$(this).find('h2,p').css('color','#fff')
			}).on('mouseleave','.picture_r',function(){
				$(this).find('img').animate({
					left:0
				});$(this).find('.addtext,.addtext_new').css('background','#fff')
				$(this).find('h2').css('color','#333333')
				$(this).find('p').css('color','#9696ae')
			})
			//main图片右晃动
			$main.on('mouseenter','.picture_l',function(){
				$(this).find('img').animate({
					right:-20
				});$(this).find('.addtext,.addtext_new').css('background','#eeafce')
				$(this).find('h2,p').css('color','#fff')
			}).on('mouseleave','.picture_l',function(){
				$(this).find('img').animate({
					right:0
				});$(this).find('.addtext,.addtext_new').css('background','#fff')
				$(this).find('h2').css('color','#333333')
				$(this).find('p').css('color','#9696ae')
			})
		})