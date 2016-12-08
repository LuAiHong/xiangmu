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
			//放大镜
			var $Osmall = $('#smallx')
			var $fang = $('#fang')
			var $xians = $('#tobig');
			var $Obig = $xians.find('img');
			$xians.hide();
			$fang.hide();
			$Osmall.on('mousemove',function(evt){
				$xians.show();
				$fang.show();
				var nleft = $Osmall.offset().left;
				var ntop = $Osmall.offset().top;
				var newx = evt.clientX-nleft+$(window).scrollLeft()-50;
				var newy= evt.clientY-ntop+$(window).scrollTop()-50;
				//图片范围移动
				if(newx>$Osmall.width()-$fang.width()){
					newx=$Osmall.width()-$fang.width()
				}
				if(newy>$Osmall.height()-$fang.height()){
					newy=$Osmall.height()-$fang.height()
				}
				if(newx<0){
					newx=0
				}
				if(newy<0){
					newy=0
				}
				$fang.css({left:newx+'px',top:newy+'px'})
				$Obig.css({left:(newx*-2)+'px',top:(newy*-2)+'px'});
			}).on('mouseleave',function(){
				$xians.hide();
				$fang.hide();
			})
			$box_b = $('#box_b').find('img')
			
			$box_b.on('click',function(){
				var index = $(this).index()+1;
				$Osmall.find('img').attr("src",'../img/goodDetail/getmore_'+index+'.jpg')
				$Obig.attr("src",'../img/goodDetail/getmore_'+index+'.jpg')
				
			})
			var $bili = $('#bili').find('li');
			var $infor = $('.infor');
			var $pinglun = $('.pinglun');
			var $wenda = $('.wenda');
				$infor.show();
				$pinglun.hide();
				$wenda.hide();
			$bili.on('mouseenter',function(){
				index = $(this).index();
				console.log(index)
				if(index==0){
					$infor.show();
					$pinglun.hide();
					$wenda.hide();
				}
				if(index==1){
					$infor.hide();
					$pinglun.show();
					$wenda.hide();
				}
				if(index==2){
					$infor.hide();
					$pinglun.hide();
					$wenda.show();
				}
 			})
			//点击按钮把物品加入购物车
			$('.toshop').on('click',function(){
				var $price = $('.price');
				var $valueN = $('.valueN');
				var $Imgurl = $('.Imgurl');
				
				var goodName = 'goods';
			//创建一个空对象，来保存商品信息
			var value = {};
			value.imgurl = $Imgurl.attr('src');
			value.name = $valueN.text();
			value.price = $price.text();
				
			// 写入商品数量
			var lastCookie = document.cookie;
			if(lastCookie.indexOf(goodName) != -1){
				//遍历cookie,获取原来的数量
				$.each(lastCookie.split(';'),function(idx,val){
					var name = val.split('=')[0];
					if(name == goodName){
						value.qty = JSON.parse(val.split('=')[1]).qty + 1;
						return false
					}
				});
			}else{
				value.qty = 1;
			}
			
			
			var _cookie = goodName + '=' + JSON.stringify(value);
			console.log(_cookie)
			document.cookie = _cookie + ';path=/';
			})
			
		})
