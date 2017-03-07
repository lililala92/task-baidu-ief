window.onload=function(){
        	var lpush=document.getElementById("left-push");
			var lpull=document.getElementById("left-pull");
	        var rpush=document.getElementById("right-push");
	        var rpull=document.getElementById("right-pull");	
            var input=document.getElementById("input-text"); 
            var btn=document.getElementById("sort");
            //绑定鼠标点击事件      
        	lpush.onclick=function(){
                Insert("left");          
            }
            rpush.onclick=function(){
                Insert("right");          
            }
            lpull.onclick=function(){
                Delete("left");          
            }
            rpull.onclick=function(){
                Delete("right");          
            }
           // 限制输入的数字在10-100
           input.onchange=function(){
             this.value=this.value.replace(/\D/g,'');
             if(this.value>100){
                      this.value = 100;
                    }
             if(this.value<10){
                      this.value = 10;
                    }       
           }
           btn.onclick=function(){
              var array=quickSort(getData());
              var Li=document.getElementsByTagName("li");
              for(var i=0;i<Li.length;i++)
              {
                 Li[i].style.height=array[i]+"px";    
              }
           }
        }
        //添加点
        function Insert(dir){
        	var input=document.getElementById("input-text");
        	var ul=document.getElementById("List");
            //创建新的节点
            var insertLi=document.createElement("li");
            //判断输入值
            if (input.value=="") {alert("输入值不能为空!")}
            else{
                //队列元素数量最多限制为60个，当超过60个时，添加元素时alert出提示
                if(ul.childNodes.length==60){alert("超出60个");}
                else{
                //没有节点或者向右添加时   
                insertLi.style.height=input.value+"px"          
                if(ul.childNodes.length==0||dir=="right"){  

                   ul.appendChild(insertLi);                 
                  }
                //向左添加时
                else{
                    ul.insertBefore(insertLi,ul.firstChild);                 
                }
                }
            }
            
        }    
        //删除点    
        function Delete(dir){
        	var ul=document.getElementById("List");
            if(ul.childNodes.length==0){alert("无结点可删除")}
        	else
                {
                 if(dir="left")
                    {ul.removeChild(ul.firstChild);}
                 else{
                    ul.removeChild(ul.lastChild); 
                 } 
                }
        }
        //为排序得到一个数组
        function getData(){
            var array=new Array();
            var Li=document.getElementsByTagName("li");
            if(Li.length==0){alert("空值");}
            else{
            for(var i=0;i<Li.length;i++){
                var s=Li[i].style.height;
                array.push(s.substring(0,s.length-2));  
            }
            }
            return array;
        }
        //排序算法
        function quickSort(array) {
            var left = 0;
            var right = array.length - 1;           
            return sort(array,left, right);
     }
       function sort(array, left, right){
                if(left < right){
                        var key = array[left];
                        var low = left;
                        var high = right;
                        while(low < high){
                                while(low < high && array[high] >= key){
                                        high--;
                                }
                                array[low] = array[high];
                                while(low < high && array[low] <= key){
                                        low++;
                                }
                                array[high] = array[low];
                        }
                        array[low] = key;
                        sort(array,left,low-1);
                        sort(array,low+1,right);
                }
                return array;
        }