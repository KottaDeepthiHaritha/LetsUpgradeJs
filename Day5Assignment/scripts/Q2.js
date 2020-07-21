console.log("Question 2: OOPS concept example program");
class User{
    constructor(name,age,email){
        this.name=name;
        this.age=age;
        this.email=email;
        this.courses=[];
    }
    login(){
        console.log(`${this.name} has logged in...`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out...`);  
        return this; 
    }
}
class Moderator extends User{
    constructor(name,age,email,coins){
        super(name,age,email);
        this.coins=0;
    }
    addCoins(){
        this.coins++;
        console.log(`${this.name} has ${this.coins} coins..`);
        return this;
    }
    removeCoins(){
        this.coins--;
        console.log(`${this.name} has ${this.coins} coins..`);
        return this;
    }
}
class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
    removeCourse(user,course){
        user.courses.pop();
        console.log(user);
    }

    
}
let user1=new User('Mahesh','21','mahesh@gmail.com');
let user2=new User('Ganesh','20','ganesh@gmail.com');
user1.login().logout();
let mod=new Moderator('Girish','20','girish@gmail.com');
mod.login().addCoins().addCoins().addCoins().removeCoins().logout();
let admin=new Admin();
admin.addCourse(user1,'Python');
admin.addCourse(user2,'Javascript');
admin.addCourse(user2,'Java');
admin.removeCourse(user1);
console.log("--------------------------------------------");