(function(global){
   var Zrm=function(){};
   Zrm.prototype={
	         getJson:function(url,json,fn){
	                    var argus_str="";
						var str=new Date().getTime()+"_"+Math.random();
                        var newstr=str.replace(/0\./,"");
			            var oScript=document.createElement("script");
			            var ohead=document.getElementsByTagName("head")[0];
						json['callback']=json['callback']=="?" ? "jsoncallback"+newstr : json['callback'];
						window[json['callback']]=fn;
			            oScript.type="text/javascript";
			            for(var i in json){
				              argus_str+=i+"="+json[i]+"&";
			            }
			            oScript.src=url+"?"+argus_str+"t="+new Date().getTime();
			            ohead.appendChild(oScript);
                        this.bind(oScript,"load",function(){
							     window[json['callback']]=null;
						         ohead.removeChild(oScript);
						});
                 },
			 ajax:function(type,url,json,fn,state){
					  var oAjax=window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
					  var argus_str="";
					  state=arguments.length==5 ? false : true;
						 for(var i in json){
						    argus_str+=i+"="+json[i]+"&";
						 }
                         argus_str=type=="post" ? argus_str+"t="+new Date().getTime() : argus_str;
                         url=type=="post" ? url : url+"?"+argus_str+"t="+new Date().getTime();
						 oAjax.open(type,url,state);
						 if(type=="post") oAjax.setRequestHeader("content-type","application/x-www-form-urlencoded"); 
						 type=="post" ? oAjax.send(argus_str) : oAjax.send();
						 oAjax.onreadystatechange=function(){
							 if(oAjax.readyState==4){
								 if(oAjax.status==200){
									 fn(oAjax.responseText);
								 }
							 }
						}
			       },
			 get:function(name,id){ 
				        if(arguments.length==2){
						       var aArray=nArray=[];
                               var obj=typeof id=="string" ? document.getElementById(id) : id;
							   var strindex=name.charAt(0);
							   var objstr=name.substring(1);
							   nArray=obj.getElementsByTagName("*");
							   if(strindex=="."){
								      for(var i=0;i<nArray.length;i++){
							               if(nArray[i].className==objstr){
								                 aArray.push(nArray[i]);
									       }
						              }
									  return aArray.length>1 ? aArray : aArray[0];
							   }else aArray=obj.getElementsByTagName(name);
							   return aArray;
						}else if(arguments.length==1){
							   var strindex=name.charAt(0);
							   var objstr=name.substring(1);
						       if(strindex=="#"){
							          return document.getElementById(objstr);
							   }else if(strindex=="."){
							          var aTags=document.getElementsByTagName("*"); 
									  var aArray=[];
                                      for(var i=0;i<aTags.length;i++){
							               if(aTags[i].className==objstr){
								                 aArray.push(aTags[i]);
									       }
						              }
									  return aArray.length>1 ? aArray : aArray[0];

							   }else{
							          var aArray=[];
									  return aArray=document.getElementsByTagName(name);
							   }
						}else return;
				   },
	    setTab :function(oTab,oDiv,evt,active){
				   var  aList=this.children(oTab);
				   var	that=this;
				   var  len=arguments.length;
				   var	aDiv=that.get(oDiv);
				        aDiv[0].style.display="block";
						for(var i=0;i<aList.length;i++){
							that.bind(aList[i],evt,function(){
								 for(var j=0;j<aList.length;j++){
									 len==4 ? (aList[j].className=aList[j]==this ? active : "") : (aList[j].className=aList[j]==this ? aList[j].id+"other" : aList[j].id);
									 aDiv[j].style.display=aList[j]==this ? "block" : "none";
								 }
							});
					    }
		        },
		getStyle : function(obj,attr){
			          var oStyle=null;
					  if(obj.currentStyle){
						  if(attr=="opacity"){
							   oStyle=obj.currentStyle['filter'].toString();
							   oStyle=oStyle=="" ? 1 : obj.currentStyle[attr];
						  }else oStyle=obj.currentStyle[attr];
					  }else{
						if(attr=="borderWidth"){
						   if(!getComputedStyle(obj,null)[attr]) attr="borderLeftWidth";
						}
						oStyle=getComputedStyle(obj,null)[attr];
					  }
					  return oStyle;	
			   },
		setStyle:function(obj,json){
				    for(var attr in json){
			          if(attr=="opacity"){
					         obj.style.filter="alpha(opacity="+json[attr]+")";
							 obj.style[attr]=json[attr]/100;
					  }else if(attr=="backgroundColor" || attr=="color" || attr=="display" || attr=="zIndex") obj.style[attr]=json[attr];
					  else obj.style[attr]=json[attr]+"px";
					}
			   },
		createEle:function(ele,json){
			        var obj=document.createElement(ele);
					if(arguments.length>1){
	                    for(var i in json){
	                         if(i!="cssText") obj[i]=json[i]; 
							 else obj.style[i]=json[i];
	                    }
			        }
	                return obj;
			   },
		insert:function(parent,obj,nexobj,des){

			        var oDiv=typeof obj =="string" ? this.get(obj) : obj;
					if(arguments.length==3) des="before";
                    if(arguments.length>2){
							var oNextDiv=typeof nexobj =="string" ? this.get(nexobj) : nexobj;
						    des=="before" ? parent.insertBefore(oDiv,oNextDiv) : parent.insertBefore(oDiv,oNextDiv.nextSibling);
					}
					else parent.insertBefore(oDiv,null);

			   },
		bind : function(obj,evt,fn){
			          var oDiv=typeof obj =="string" ? this.get(obj) : obj;	
					  oDiv.attachEvent ?  oDiv.attachEvent("on"+evt,function(){fn.apply(oDiv,arguments);}) : oDiv.addEventListener(evt,fn,false);
			   },
		getDocAttr : function(attr){
			          return document.documentElement[attr] || document.body[attr];
			   },
		getCookie: function(c_name){
			             if (document.cookie.length>0){
							   c_start=document.cookie.indexOf(c_name + "=");
							   if(c_start!=-1){ 
								   c_start=c_start + c_name.length+1;
								   c_end=document.cookie.indexOf(";",c_start);
							   if (c_end==-1)c_end=document.cookie.length;
								   return unescape(document.cookie.substring(c_start,c_end));
						 	   } 
						 }
						 return"";
			       },
	    setCookie:function(c_name,value,expiredays){
			           var exdate=new Date();
						exdate.setTime(exdate.getTime()+expiredays*24*60*60*1000); 
						cookieVal=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString()+";path=/");
						document.cookie=cookieVal;
		          },
		unique:function(arr){
			        var row=[],elems,i=0,j=0,sArray=[];
                    while((elems=arr[i])){
	                    var k=0;
                        sArray.push(elems);
	                    for(var z in sArray){
		                     if(sArray[z]===elems) k++;
		                }
	                    if(k>1){
		                     j=row.push(i);
		                }
		                i++;
	                }
	                while(j--) arr.splice(row[j],1);
	                return arr;
			   },
		inArray:function(arr,value){
			        var result=false;
                    for(var i in arr){
	                    if(arr[i]===value) result =true;
	                }
	                return result;
			   },
		isArray:function(arr){
			        return arr instanceof Array;
			   },
		children:function(obj){
			   var obj=(typeof obj =="string") ? this.get(obj) : obj;
			   return obj.children;
			   },
		startMove:function(obj,json,ratio,fn){
			           var that=this;
					   if(typeof obj.timer != "undefined") clearInterval(obj.timer);
					   obj.timer=setInterval(function(){
						   var stopMove=true;
						   for(var attr in json){
								 if(attr=="opacity"){
									 var cur=Math.round(parseFloat(that.getStyle(obj,attr))*100);
								 }else{
									 var cur=parseInt(that.getStyle(obj,attr));
								 }
								 var speed=(json[attr]-cur)/ratio;
								 speed=(speed>0) ? Math.ceil(speed) : Math.floor(speed);
								 if(json[attr]!=cur){
									 stopMove=false;
								 }
								 if(attr=="opacity"){
									 obj.style.filter="alpha(opacity="+(cur+speed)+")";
									 obj.style[attr]=(cur+speed)/100;
								 }else{
									 obj.style[attr]=cur + speed + "px";
								 }
						   }
						   if(stopMove==true){
								 clearInterval(obj.timer);
								 if(fn) fn();
						   }
					   },30);
			    },
		foreach:function(array,fn){
					   for(var i=0;i<array.length;i++){
	                       fn(i,array[i]);
	                   }
				},
	changeValue:function(obj,fn){
				       if(typeof obj.oninput=="object"){
                            obj.oninput=function(){
	                             fn.apply(obj,arguments);
	                        }
                       }else{
                          obj.attachEvent('onpropertychange',function(e) {
                              if(e.propertyName=='value'){
			                        fn.apply(obj,arguments);
			                  }
                          });
                       }
				},
		liveEvent:function(obj,classname,evt,fn){
					var obj=(typeof obj =="string") ? document.getElementById(obj) : obj;
			        this.bind(obj,evt,function(e){
			            var et=window.event || e;
			            var oTarget=et.srcElement || et.target;
						if(oTarget.className==classname) fn.apply(oTarget,arguments);
		            });
			    },
	    navMove:function(obj, cur, target, callback, endcallback, ratio, sfloat){
					var maxSpeed=16,now={},percent=0;
					var ratio=ratio ? ratio : 6;
					var sfloat=sfloat ? sfloat : 0.75;
					if(!obj.displace) obj.displace=0;
					if(!obj.lasttime) obj.lasttime=0;
					var t=new Date().getTime();
					if(t-obj.lasttime>20)
					{
						moveTip();
						obj.lasttime=t;
					}
					if(typeof obj.timer != "undefined") clearInterval(obj.timer);
					obj.timer=setInterval(moveTip, 20);
					function moveTip(){
						obj.displace+=(100-percent)/ratio;
						obj.displace*=sfloat;
						if(Math.abs(obj.displace)>maxSpeed) obj.displace=obj.displace>0 ? maxSpeed : -maxSpeed;
						percent+=obj.displace;
						for(var i in cur)
						{
							now[i]=(target[i]-cur[i])*percent/100+cur[i];
						}
						if(callback) callback.call(obj, now);
						if(Math.abs(obj.displace)<1 && Math.abs(100-percent)<1)
						{
							obj.style.left=target.left+"px";
							clearInterval(obj.timer);
							if(endcallback) endcallback.call(obj, target);
							obj.displace=0;
						}
					}
				},
		 getKeyCode:function(e){
					return navigator.userAgent.indexOf("IE")!=-1 ? window.event.keyCode : e.which;
	            },
		 parseJson:function(str){
					return typeof JSON!="undefined" ? JSON.parse(str) : eval("("+str+")");
				},
		 toJsonStr:function(obj){
				    if(typeof JSON!="undefined") var jsonStr=JSON.stringify(obj);
					else{
						 var jsonStr="";
					     for(var i in obj){
						        jsonStr+=jsonStr ? ','+(!this.isArray(obj) ? '"'+i+'":' : '')+(typeof obj[i] !="string" && isNaN(obj[i]) ? this.toJsonStr(obj[i]) : '"'+obj[i]+'"')+'' : ''+(!this.isArray(obj) ? '"'+i+'":' : '')+(typeof obj[i] !="string" && isNaN(obj[i]) ? this.toJsonStr(obj[i]) : '"'+obj[i]+'"')+'';
						 }   
                         jsonStr=!this.isArray(obj) ? "{"+jsonStr+"}" : "["+jsonStr+"]";
					}
					return jsonStr;
				},
		 insertText:function(obj,str) {
				
						obj.focus();
						if (document.selection) {
							var sel = document.selection.createRange();
							sel.text = str;
						} else if (typeof obj.selectionStart === 'number' && typeof obj.selectionEnd === 'number') {
							var startPos = obj.selectionStart,
							endPos = obj.selectionEnd,
							cursorPos = startPos,
							tmpStr = obj.value;
							obj.value = tmpStr.substring(0, startPos) + str + tmpStr.substring(endPos,tmpStr.length);
							cursorPos += str.length;
							obj.selectionStart = obj.selectionEnd = cursorPos;
						} else {
							obj.value += str;
						}
				
			}

   };
   global.oZrm=new Zrm;
})(this);