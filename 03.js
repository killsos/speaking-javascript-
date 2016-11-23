var jane = {
  name:"killsos",
  friends:['ql','lq'],
  logFriend:function(){
    //'use strict';
    this.friends.forEach(function(){
      console.log(this);
    })

  }
};

jane.logFriend(); // window
