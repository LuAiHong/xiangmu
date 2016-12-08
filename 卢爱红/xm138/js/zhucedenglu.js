$(function(){
//点击跳转到注册页面
$(".zhucedenglu .denglu").click(function(){
	 	          location.href="denglu.html";
	 })
 $(".zhucedenglu .zhuce").css({"background":"white"});
 $(".zhucedenglu .zhuce").css({"border-top": "5px solid orange"}).find("a").css({"color": "orange"})
 $(".zhucedenglu .zhuce").siblings().css({"border-top": "5px solid rgb(231,231,231)"}).find("a").css({"color": "rgb(136,136,136)"})

$("#password1").blur(function(){
	       var $pword=$(this).val();
	       var $istrue = /^.{8,16}$/.test($pword);
	       $("#password1Tip").css({"display": "block"})
	       if($istrue){
	      	      if($pword.length<10){
	      	      	     $("#password1Tip").text("密码强度：弱");
	      	      }else if($pword.length>=10&&$pword.length<13){
	      	      	     $("#password1Tip").text("密码强度：中");
	      	      }else if($pword.length>=13&&$pword.length<21){
	      	      	     $("#password1Tip").text("密码强度：强");
	      	      }
	      }else{
	      	     $("#password1Tip").text("密码长度为6-20位字符");
	      }
})
$("#password2").blur(function(){
	       var $pword2=$(this).val();
	       $("#password2Tip").css({"display": "block"})
	       if($pword2==$("#password1").val()){
	      	      $("#password2Tip").text("密码校验正确");
	      }else{
	      	     $("#password2Tip").text("密码校验有误");
	      }
})

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
    
 //手机验证码 
 $("#message").blur(function(){
	      var $username=$(this).val();
	       $("#messageTip").css({"display": "block"})
	      if($username==$("#butn1").val()){
	      	      $("#messageTip").text("手机验证码正确");
	      	      console.log("z");
	      }else{
	      	     $("#messageTip").text("手机验证码错误");
	      	     console.log("c");
	      }
     })
    //用户注册
    $("#butn2").click(function(){
					var snumber = $('#number').val();
					var spassword1 = $('#password1').val();
					 
					if(snumber=="" || spassword1==""){
						     $("#zhuceTip").text("用户信息错误请重新输入");
//						      console.log("hh");
					}else{
						
						//新用户zhuce
						var  newUser = {"name":snumber,"pws":spassword1};

						//得到cookie里面原来的用户信息
						var sCookie = $.cookie('user');
						
						//判断字符是否没有定义或者为空
						if(sCookie==undefined  || sCookie==""){
							//没有用户信息
							var aCookie = [];
							aCookie.push(newUser);
						}else{
							//如果cookie里面有用户信息
							var aCookie = JSON.parse(sCookie);
							
							//第一种 新的用户信息已经注册了
							//第二种没有注册
							
							//判断新的用户信息是否已经注册
							
							var  bReg  = false //用户没有被注册
							
							$.each(aCookie,function(){
								//this //数组里面遍历到的对象
								if(this.name==snumber){
									//表示用户已经被注册
									bReg = true;
								}
							})
							
							
							if(bReg){
								
								$("#zhuceTip").text("此用户已经注册");
							}else{
								  aCookie.push(newUser);
								  $("#zhuceTip").text("您已经注册成功");
								  window.location.href="denglu.html";
							}
							
						}
					}
					
					//修改cookie
					$.cookie('user',JSON.stringify(aCookie),{expires:7 , path:"/"});
					
					console.log( $.cookie('user') );
				})
})   
