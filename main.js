function 做饭(){
    if (心情不好) {
        叫外卖
    }   else if(没有洗) {
        叫外卖
    } else{
        买菜
    }
}
做饭();
function buy(钱){
if (!没有钱) {
    alert('警察叔叔就是这个人');
    } else      {
    alert('这是您的钱，请您慢走~');
    }
}
buy();
 var a=1;
 console.log(a);//外面的是全局变量
 function fun(){
    var b=2;
    console.log(b);
 }//里面的是局部变量    
 fun();
//母函数 和 子函数 的应用
 function user(name){
    var age ,sex;
    return {
        getName:function(){
            return name;
        },
        setName:function(newName){
            name:newName;
        },
        getAge:function(){
            return age;
        },
        setAge:function(newAge){
            age=newAge;
        },
        getSex:function(){
            return sex;
        },
        setSex:function(newSex){
            sex=newSex;
        }
    }
 }
 var whh=user('王花花');
whh.setAge(22);
whh.setSex('女');
 var name=whh.getName();
 var age=whh.getAge();
 var sex=whh.setSex();
 console.log(name,sge,sex);
 