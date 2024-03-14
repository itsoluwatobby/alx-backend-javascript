// Import the required classes/interfaces
import { Cpp } from "./Cpp";
import { Java } from "./Java";
import { React } from "./React";
import { Teacher } from "./Teacher";

export const cpp = new Cpp();

export const java = new Java();

export const react = new React();

export const cTeacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  experienceTeachingC: 10
};

// For Cpp subject
console.log("Cpp:");
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// For Java subject
console.log("\nJava:");
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// For React subject
console.log("\nReact:");
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
