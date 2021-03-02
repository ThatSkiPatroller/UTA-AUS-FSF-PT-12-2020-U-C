// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer (name, tech) {
    this.name = name;
    this.tech = tech;
    this.introduction = () => {
        console.log(`Hi my name is ${this.name} and I work with ${this.tech}`);
    }
    this.practice = () => {
        console.log(`Don't bug ${this.name}, they are working on ${this.tech}`);
    }
}
const newDeveloper = new Developer("Trace", "JavaScript");
const harvey = new Developer ("Harvy", "React");
const mac = new Developer ("Mac", "Vue.js");
newDeveloper.introduction();
newDeveloper.practice();
harvey.introduction();
harvey.practice();
mac.introduction();
mac.practice();
// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor

// TODO: Call the 'introduction()' method on the new object
