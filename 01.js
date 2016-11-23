"use strict";

class User {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}

class Manager extends User{
    // 和call的区别，call先创建自身对象
    constructor(name,age,password){
        // super先创建父对象 必须
        super(name,age);
        console.log(super);
        this.password = password
    }
}
