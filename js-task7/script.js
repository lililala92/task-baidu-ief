window.onload=function(){
    //根节点
	var rootDiv=document.getElementById("root");	
	var preorder=document.getElementById("pre-order");	
	var inorder=document.getElementById("in-order");
	var postorder=document.getElementById("post-order");
	var reset=document.getElementById("reset");	
	var root=new Node();
	root.data=rootDiv;
	//创建整个二叉树
	InsertChild(root);
	preorder.onclick=function(){
		     var array=new Array();
             preOrderTraverse(root,array);
             visit(array);
	}
	inorder.onclick=function(){
		     var array=new Array();
             inOrderTraverse(root,array);
             visit(array);
	}
	postorder.onclick=function(){
		     var array=new Array();
             postOrderTraverse(root,array);
             visit(array);
	}
	reset.onclick=function(){
       
	}
	
}
//二叉树结点
function Node(){
	this.data=null;;
	this.leftchild=null;
	this.rightchild=null;
}
//创建二叉树
function InsertChild(parent){
	//得到父标签
	var parentdiv=parent.data;
	//得到子标签
    var children=getChildren(parentdiv);
    if(children.length!=0){
        //插入左节点
		var leftChild=new Node();		
		leftChild.data=children[0];
		parent.leftchild=leftChild;
	    //插入右节点
	    var rightChild=new Node();		
		rightChild.data=children[1];
		parent.rightchild=rightChild;
     }
     else{return false;}
     //递归实现插入所有节点
	InsertChild(leftChild);	
	InsertChild(rightChild);
}
//得到div子节点
function getChildren(parent)
{
	var childNodes=parent.childNodes;
	var children=new Array();
	for(var i=0;i<childNodes.length;i++)
	{
		if(childNodes[i].nodeName=="DIV")
		{children.push(childNodes[i]);}
	}
	return children;
}
   var count=0;
function visit(array){
	    if(count<array.length)
	    {
	    	if(count%3==0){
                array[count].style.backgroundColor="red";
	    	}
	    	else if(count%3==1){
                array[count].style.backgroundColor="yellow";
	    	}
	    	else{
                array[count].style.backgroundColor="blue";
	    	}
	        count++;
	        setTimeout(function(){visit(array)},1000)
	    }
	    else{
	    	count=0;
	    	setTimeout(function(){
	    		for(var i=0;i<array.length;i++)
	    		{
                    array[i].style.backgroundColor="white";
	    		}
	    		},3000)
	    	return false;
	    }

}
//先序遍历--根左右
function preOrderTraverse(node,array)
{
	if(node){		
			 array.push(node.data);		
             preOrderTraverse(node.leftchild,array);				
             preOrderTraverse(node.rightchild,array);	
	}
	else {return false;}
}
//中序遍历--左根右
function inOrderTraverse(node,array)
{
	if(node){					 
             inOrderTraverse(node.leftchild,array);
             array.push(node.data);						
             inOrderTraverse(node.rightchild,array);	
	}
	else {return false;}
}
//后序遍历--左右根
function postOrderTraverse(node,array)
{
	if(node){					 	
             postOrderTraverse(node.leftchild,array);				
             postOrderTraverse(node.rightchild,array);
             array.push(node.data);		
	}
	else {return false;}
}