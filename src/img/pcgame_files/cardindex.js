(function(){
                                       oZrm.setTab(".card_top_show_tab",".card_top_show_submit","mouseover","active");
									   showSelect("#c_game","#c_game_list","#c_game_input");
									   showSelect("#c_price","#c_price_list","#c_price_input");
									   showSelect("#c_qq","#c_qq_list","#c_qq_input");
									   showSelect("#c_qq1","#c_qq_list1","#c_qq_input1");
									   var pid=1;
									   var qid=1;
									   var gameJson={};
									   var qqJson={};
									   var oBody=oZrm.get("body")[0];
									   var aList=oZrm.get(".card_game_list");
									   $.ajax({type:"get",url:"http://www.fhyx.com/api/getcardgame",dataType:"jsonp",jsonp:"callback",async:false,jsonpCallback:"success_jsonpCallback",success:function(data){       
									              gameJson=data;
												  var gamestr="";
												  var k=m=0;
									              for(var i in gameJson){
													      if(k==0){
															  $("#c_game_input").val(gameJson[i]['py']+"-"+gameJson[i]['name']);
															  $("#c_game_input").attr("gameid",i);
															  var pricestr="";
															  for(var j in gameJson[i]['types']){
																      if(m==0){
																		  
																		     showData(i,j);
																			 
																		     $("#c_price_input").val(j); 
																			 $("#c_price_input").attr("price",j);
																			 
																	  }
																	  pricestr+='<a href="javascript:void(0)" price="'+j+'">'+j+'</a>';
																	  m++;
															  }
															  $("#c_price_list").html(pricestr);
														  }
													      gamestr+='<a href="javascript:void(0)" gameid="'+i+'">'+gameJson[i]['py']+"-"+gameJson[i]['name']+'</a>';  
														  k++;
												  }
												  $("#c_game_list").html(gamestr);
												  
                                       }});
									   
									   //qq部分
									   $.ajax({type:"get",url:"http://www.fhyx.com/api/getcardgame?qq=1",dataType:"jsonp",jsonp:"callback",async:false,jsonpCallback:"jsonpCallback",success:function(data){
										          qqJson=data;
												  var gamestr="";
												  var k=m=0;
									              for(var i in qqJson){
													      if(k==0){
															  $("#c_qq_input").val(qqJson[i]['py']+"-"+qqJson[i]['name']);
															  $("#c_qq_input").attr("gameid",i);
															  var pricestr="";
															  for(var j in qqJson[i]['types']){
																      if(m==0){
																		  
																			 showQQData(i,j);
																			 
																		     $("#c_qq_input1").val(j); 
																			 $("#c_qq_input1").attr("price",j);
																			 
																	  }
																	  pricestr+='<a href="javascript:void(0)" price="'+j+'">'+j+'</a>';
																	  m++;
															  }
															  $("#c_qq_list1").html(pricestr);
														  }
													      gamestr+='<a href="javascript:void(0)" gameid="'+i+'">'+qqJson[i]['py']+"-"+qqJson[i]['name']+'</a>';  
														  k++;
												  }
												  $("#c_qq_list").html(gamestr);
									   }});
									   $(".card_top_show_submit_radio").delegate("input","click",function(){
										          var that=$(this); 
												  $("#game_rel_price").html(gameJson[$("#c_game_input").attr("gameid")]['types'][$("#c_price_input").attr("price")][that.val()]['price']);
												  pid=gameJson[$("#c_game_input").attr("gameid")]['types'][$("#c_price_input").attr("price")][that.val()]['pid'];
									   });
									   $(".card_top_show_submit_radio1").delegate("input","click",function(){
										          var that=$(this); 
												  $("#qq_rel_price").html(qqJson[$("#c_qq_input").attr("gameid")]['types'][$("#c_qq_input1").attr("price")][that.val()]['price']);
												  qid=qqJson[$("#c_qq_input").attr("gameid")]['types'][$("#c_qq_input1").attr("price")][that.val()]['pid'];
									   });
									   oZrm.bind(oBody,"click",function(){
										          oZrm.foreach(aList,function(_i,_v){
													     _v.style.display="none";
												  });
									   });
									   $(".card_game_list").delegate("a","click",function(){
											        $(".card_game_list").hide();
													$(this).parents(".card_top_show_submit_list").find(".t_select").val($(this).html());

													var that=$(this);
													if($(this).parent().attr("id")=="c_game_list"){
																        var pricestr=""; 
																		var m=0;
																		var gameid=that.attr("gameid");
																		$("#c_game_input").attr("gameid",gameid);
																		for(var j in gameJson[gameid]['types']){
																		          if(m==0){
																					  
																						 showData(gameid,j);
																						 
																						 $("#c_price_input").val(j); 
																						 $("#c_price_input").attr("price",j);
																						 
																				  }
																				  pricestr+='<a href="javascript:void(0)" price="'+j+'">'+j+'</a>';
																				  m++;
																		}
																		$("#c_price_list").html(pricestr);
																   
													}
													if($(this).parent().attr("id")=="c_price_list"){
																						 var gameid=$("#c_game_input").attr("gameid");
																						 var price=that.attr("price");
																						 showData(gameid,price);
																	   
													}
													//qq部分
													if($(this).parent().attr("id")=="c_qq_list"){
																        var pricestr=""; 
																		var m=0;
																		var gameid=that.attr("gameid");
																		$("#c_qq_input").attr("gameid",gameid);
																		for(var j in qqJson[gameid]['types']){
																		          if(m==0){
																					  
																						 showQQData(gameid,j);
																						 
																						 $("#c_qq_input1").val(j); 
																						 $("#c_qq_input1").attr("price",j);
																						 
																				  }
																				  pricestr+='<a href="javascript:void(0)" price="'+j+'">'+j+'</a>';
																				  m++;
																		}
																		$("#c_qq_list1").html(pricestr);
																   
													 }
													 if($(this).parent().attr("id")=="c_qq_list1"){
																						 var gameid=$("#c_qq_input").attr("gameid");
																						 var price=that.attr("price");
																						 showQQData(gameid,price);
																	   
													}
									  });
									  $("#game_submit").bind("click",function(){
										           buy_temp(1,pid,1);   
									  });
									  $("#qq_submit").bind("click",function(){
										           buy_temp(1,qid,1);   
									  });
									  function showQQData(gameid,price){
										           var typestr="";
												   $("#c_qq_input1").attr("price",price);
												   if(qqJson[gameid]['types'][price][1]){
															typestr+='<div class="card_top_show_submit_radio_con"><input type="radio" name="qqchongzhi" value="1" checked/> <span>卡密</span></div>';
															if(qqJson[gameid]['types'][price][2]) typestr+='<div class="card_top_show_submit_radio_con"><input type="radio" name="qqchongzhi" value="2"/> <span>直充</span></div>'; 
												   }else typestr+='<div class="card_top_show_submit_radio_con"><input type="radio" name="qqchongzhi" value="2" checked/> <span>直充</span></div>'; 
												   $('.card_top_show_submit_radio1').html(typestr);
												   $("#qq_rel_price").html(qqJson[gameid]['types'][price][$(".card_top_show_submit_radio1 input").eq(0).val()]['price']);
												   qid=qqJson[gameid]['types'][price][$(".card_top_show_submit_radio1 input").eq(0).val()]['pid'];
									  }
									  function showData(gameid,price){
										           var typestr="";
												   $("#c_price_input").attr("price",price);
												   if(gameJson[gameid]['types'][price][1]){
															typestr+='<div class="card_top_show_submit_radio_con"><input type="radio" name="chongzhi" value="1" checked/> <span>卡密</span></div>';
															if(gameJson[gameid]['types'][price][2]) typestr+='<div class="card_top_show_submit_radio_con"><input type="radio" name="chongzhi" value="2"/> <span>直充</span></div>'; 
												   }else typestr+='<div class="card_top_show_submit_radio_con"><input type="radio" name="chongzhi" value="2" checked/> <span>直充</span></div>'; 
												   $('.card_top_show_submit_radio').html(typestr);
												   $("#game_rel_price").html(gameJson[gameid]['types'][price][$(".card_top_show_submit_radio input").eq(0).val()]['price']);
												   pid=gameJson[gameid]['types'][price][$(".card_top_show_submit_radio input").eq(0).val()]['pid'];
									  }
									  function buy_temp(rtype,pid,num)
									  {
											$("#game_pid").val(pid);
											$("#game_sub").submit();
									   }
									   function showSelect(obj1,obj2,obj3){
										   var oGame=oZrm.get(obj1);
										   var oGameList=oZrm.get(obj2);
										   var aGameList=oGameList.children;
										   var oInput=oZrm.get(obj3);
										   oZrm.bind(oGame,"click",function(evt){
											        showList(evt);
										   });
										   oZrm.bind(oInput,"click",function(evt){
											        showList(evt);
										   });
										   
										   function showList(evt){
											        oZrm.foreach(aList,function(_i,_v){
														if("#"+_v.id!=obj2){
															_v.style.display="none";
														}
												    });
													oGameList.style.display=="block" ? oGameList.style.display="none" : oGameList.style.display="block";
													var e=evt || window.event;
													if (window.event) { 
													    e.cancelBubble=true; 
													} else { 
													    e.stopPropagation(); 
													} 
										   }
									   }
}());


(function(){
									   var zmjson={};
										             
							          $.ajax({type:"get",url:"http://www.fhyx.com/api/getzmgame",dataType:"jsonp",jsonp:"callback",async:false,jsonpCallback:"jsonpCallback_a",success:function(data){
										      zmjson=data;
										      var datastr="";
											  for(var i in zmjson){
													if(i=="A"){
																for(var j in zmjson[i]){
																					 datastr+='<span><a href="http://www.fhyx.com/item/'+zmjson[i][j]['products_id']+'.html" target="_blank">'+data[i][j]['name']+'</a></span>';
																}   
													}
											  }
											  $("#index_card_con_center_top").html(datastr);
										  
									  }});
									  $(".index_card_hotgame").bind("mouseover",function(){
										                $("#index_card_con_center_top").hide();
														$(".index_card_con_center_top").eq(0).show(); 
														$(".index_card_hotgame").removeClass("hotgame_active");
														$(".index_card_alpha a").removeClass("active");
								      });
                                      $(".index_card_alpha a").bind("mouseover",function(){
										          $(".index_card_alpha a").removeClass("active");
												  $(this).addClass("active");
												  var that=$(this);
												  var datastr="";
												  $("#index_card_con_center_top").css("display","block"); 
												  $(".index_card_con_center_top").eq(0).hide(); 
												  $(".index_card_hotgame").addClass("hotgame_active");
												  for(var i in zmjson){
															if(i==that.text()){
																			for(var j in zmjson[i]){
																								 datastr+='<span><a href="http://www.fhyx.com/item/'+zmjson[i][j]['products_id']+'.html" target="_blank">'+zmjson[i][j]['name']+'</a></span>';
																			}   
															}
												  }
												  $("#index_card_con_center_top").html(datastr);
												  if($("#index_card_con_center_top span").length==0){
															  $("#index_card_con_center_top").html('<em style="width:100%;text-align:center;height:220px;line-height:200px;font-size:16px;color:#999;">暂无相关游戏</em>');
												  }
													  
									  });
}());