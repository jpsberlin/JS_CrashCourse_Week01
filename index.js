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




var yogaSession1 = new YogaSession( ’YogaSession1’, 60, true);

var yogaSession2 = new YogaSession( ’YogaSession2’, 7, true);

var yogaSession3 = new YogaSession( ’YogaSession3’, 90, false);


 
var Asana1 = new Asana ('SuryaNamaskar', 3, true);

var Asana2 = new Asana ('BowPose', 1, true);

var Asana3 = new Asana ('Boat', 1, true);


var Pranayama1 = new Pranayama ('SatnamaPran', 1, true);

var Pranayama2 = new Pranayama ('ChandraPran', 5, true);


var Meditation1 = new Meditation ('SaTaNaMa', 7, true);

var Meditation2 = new Meditation ('GongMeditation', 11, false);

var Meditation3 = new Meditation ('Heart Meditation', 5, true);

var armagan = new TechYogis('Armagan', 34);
var omar = new TechYogis('Omar', 30);
var armagan = new Person('Anna', 27);
var maria = new Person('Maria', 26);



armagan.attend(YogaSession1);
omar.attend(YogaSession2);
anna.attend(YogaSession3);
maria.attend(YogaSession1);
