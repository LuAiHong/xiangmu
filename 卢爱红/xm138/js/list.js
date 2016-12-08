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
			var $wuli = $('#wuli').find('li');
			var $huli = $('#wuli').find('.change');
			var $list_b_b = $('.list_b_b');
			var $content = $(".content");
			var index = 0;
			var $list_b_c = $('.list_b_c');
			var $Oalone = $('.alone1');
			var $Balone = $('.alone2');
			    $list_b_b.hide();
				$list_b_c.hide();
				$Oalone.hide();
				$wuli.on('click',function(){
					index = $(this).index()
					$(this).css('background','#d10048').siblings().css('background','#fff')
					
					beauty()
				})
				$Oalone.on('click',function(){
					
					$Balone.show();
					index--;
					if(index<0){
						index=0
					}
					console.log($wuli)
					$wuli.eq(index).css('background','#d10048').siblings().css('background','#fff')
					beauty()
				})
				$Balone.on('click',function(){
					$Oalone.show();
					index++;
					if(index>2){
						index=2
					}
					console.log($wuli)
					$wuli.eq(index).css('background','#d10048').siblings().css('background','#fff')
					beauty()
				})
				function beauty(){
					if(index>0){
						$Oalone.show();
					}else{
						$Oalone.hide();
					}
					if(index<2){
						$Balone.show();
					}else{
						$Balone.hide();
					}
					if(index==0){
						$content.hide();
						$list_b_c.hide();
						$list_b_b.show();
					}
					if(index==1){
						$content.hide();
						$list_b_c.show();
						$list_b_b.hide();
					}
					if(index==2){
						$content.show();
						$list_b_c.hide();
						$list_b_b.hide();
					}
				}
		})