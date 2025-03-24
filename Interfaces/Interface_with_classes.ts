// Implements interface with another clas name
interface Animal {
	name : string;
	makeSound() : void
}

class Dogyy implements Animal {
	name : string;

	constructor(name : string){
		this.name = name;
	}
makeSound() {
	console.log("Woof! Woof!")
}
}

const dogy = new Dogyy("Buddy");
dogy.makeSound(); // O/P : Woof! Woof