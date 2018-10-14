
// new class is YogaSession, with name, time & beginner

YogaSession = class {

	constructor(name, time, beginner) {
		this.name = (name);
		this.time = (time);
		this.beginner = (beginner);
      
	}


}

// new class is Asana, with name, time & beginner

Asana = class {
	constructor(name, time, beginner) {
		this.name = (name);
		this.time = (time);
		this.beginner = (beginner);
      
	}
}


// new class is Pranayama, with name, time & beginner

Pranayama = class {
	constructor(name, time, beginner) {
		this.name = (name);
		this.time = (time);
		this.beginner = (beginner);
      
	}
}


// new class is Meditation, with name, time & beginner


Meditation = class {
	constructor(name, time, beginner) {
		this.name = (name);
		this.time = (time);
		this.beginner = (beginner);
      
	}
}
// new class is TechYogis(the attendies), with name and age 


TechYogi = class {
	constructor(name, age) {
		this.name = name
       		this.age = age
       		this.attendees = []
    }
    
    attend(yogaSession){
        this.yogaSessions.push(yogaSession)
        yogaSession.attendees.push(this)
        
    }
}




var YogaSession1 = new YogaSession( ’Session1’, ’60’, ’true’);

var YogaSession2 = new YogaSession( ’Session2’, ’75’, ’true’);

var YogaSession3 = new YogaSession( ’Session3’, ’90’, ’false’);


 
var Asana1 = new Asana ('Surya Namaskar', '3', 'true');

var Asana2 = new Asana ('Bow Pose', '1', 'true');

var Asana3 = new Asana ('Boat', '1', 'true');


var Pranayama1 = new Pranayama ('SaTaNaMa', '1', 'true');

var Pranayama2 = new Pranayama ('Chandra Pran', '5', 'true');


var Meditation1 = new Meditation ('SaTaNaMa', '7', 'true');

var Meditation2 = new Meditation ('Gong Meditation', '11', 'flase');

var Meditation3 = new Meditation ('Heart Meditation', '5', 'true');

var armagan = new TechYogis('Armagan', 34);
var omar = new TechYogis('Omar', 30);
var armagan = new Person('Anna', 27);
var maria = new Person('Maria', 26);



armagan.attend(YogaSession1);
omar.attend(YogaSession2);
anna.attend(YogaSession3);
maria.attend(YogaSession1);
