$(function(){
	 //点击跳转到注册页
	 $(".zhucedenglu .zhuce").click(function(){
	 	          location.href="dlzc.html";
	 })
	//点击登录注册字体样式的改变 
	      $(".zhucedenglu .denglu").css({"background":"white"});
	    
	      	      
	      	      $(".zhucedenglu .denglu").css({"border-top": "5px solid orange"}).find("a").css({"color": "orange"})
	      	     $(".zhucedenglu .denglu").siblings().css({"border-top": "5px solid rgb(231,231,231)"}).find("a").css({"color": "rgb(136,136,136)"})
	   
//密码
$("#password1").blur(function(){
	       var $pword=$(this).val();
	       var $istrue = /^.{8,16}$/.test($pword);
	       if($istrue){
	      	      if($pword.length<10){
	      	      	     $("#password1Tip").text("密码强度：弱");
	      	      }else if($pword.length>10&&$pword.length<13){
	      	      	     $("#password1Tip").text("密码强度：中");
	      	      }else if($pword.length>13&&$pword.length<21){
	      	      	     $("#password1Tip").text("密码强度：强");
	      	      }
	      }else{
	      	     $("#password1Tip").text("密码长度为6-20位字符");
	      }
})
//用户名
$("#number").blur(function(){
	      var $username=$(this).val();
	      var $istrue=/^1\d{10}$/.test($username);
	      $("#numberTip").css({"display": "block"})
	      if($istrue){
	      	      $("#numberTip").text("手机号合法");
	      }else{
	      	     $("#numberTip").text("手机号不合法");
	      }
     })
//验证码部分
 $.idcode.setCode();   //加载生成验证码方法
    
    $("#Txtidcode").blur(function(){
    	 $("#yzTip").css({"display": "block"})
        var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
        
        if(IsBy){
            $("#yzTip").text("验证码正确");
        }else {
            $("#yzTip").text("验证码有误");
        }
    })
    var bRig = false; //用户未注册
$('#butn2').click(function(){
					var $snumber = $('#number').val();
					var $spassword1 = $('#password1').val();
					if($snumber!="" && $spassword1!=""){
						//校验成功
						var sCookie = $.cookie('user');
						//判断字符串是否为空
						if(sCookie=='' || sCookie==undefined){
//							var obj = {type:false};
							
							console.log("未注册");
							//跳转到注册界面
						}else{
							
							var aCookie = JSON.parse(sCookie); //acookie是arr
//							var bRig = false; //用户未注册
							
							$.each(aCookie,function(){
						        
								if(this.name==$snumber &&this.pws==$spassword1){
									//登录成功
									bRig = true ;//登录成功
									
								}
							})
							
							
							
							if(bRig==true){
								window.location.href="footer.html";
								$("#zhuceTip").text("登录成功");
								console.log("登录成")
								var obj = {type:true,name:$snumber};
								 
	 	                        
	                             
								//
							}else{
								$("#zhuceTip").text("登录失败");
								console.log("登录失败")
								//用户信息是正确的
								//{type：true，name：name}
								var obj = {type:false};
								
							}
							
						}
						
						$.cookie('login',JSON.stringify(obj),{expires:7 , path:"/"});
					}else{
						$("#zhuceTip").text("输入错误");
					}
				})
    if(bRig==true){
    	       window.location.href="footer.html";
    }
})   
