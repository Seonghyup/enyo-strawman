var 
	kind = require('enyo/kind');

var 
	Collection = require('enyo/Collection'),
	Control = require('enyo/Control'),
	DataList = require('enyo/DataList');

var data = [
	{ classes: "repeater-item class1", firstName: "Alejandra", lastName: "Walsh" },
	{ classes: "repeater-item class2", firstName: "Marquez", lastName: "James" },
	{ classes: "repeater-item class3", firstName: "Barr", lastName: "Lott" },
	{ classes: "repeater-item class4", firstName: "Everett", lastName: "Maddox" },
	{ classes: "repeater-item class5", firstName: "Crane", lastName: "Bryant" },
	{ classes: "repeater-item class1", firstName: "Raymond", lastName: "Faulkner" },
	{ classes: "repeater-item class2", firstName: "Petersen", lastName: "Murray" },
	{ classes: "repeater-item class3", firstName: "Kristina", lastName: "Porter" },
	{ classes: "repeater-item class4", firstName: "Barbra", lastName: "Barrett" },
	{ classes: "repeater-item class5", firstName: "Tracey", lastName: "Melton" },
	{ classes: "repeater-item class1", firstName: "Effie", lastName: "Pierce" },
	{ classes: "repeater-item class2", firstName: "Webb", lastName: "Sloan" },
	{ classes: "repeater-item class3", firstName: "Diana", lastName: "Castaneda" },
	{ classes: "repeater-item class4", firstName: "Gaines", lastName: "Hampton" },
	{ classes: "repeater-item class5", firstName: "Ebony", lastName: "Stanley" },
	{ classes: "repeater-item class1", firstName: "Anne", lastName: "Moses" },
	{ classes: "repeater-item class2", firstName: "Mercer", lastName: "Skinner" },
	{ classes: "repeater-item class3", firstName: "Williams", lastName: "Booker" },
	{ classes: "repeater-item class4", firstName: "Pearson", lastName: "Blevins" },
	{ classes: "repeater-item class5", firstName: "Pearl", lastName: "Mcknight" },
	{ classes: "repeater-item class1", firstName: "Mcconnell", lastName: "Jenkins" },
	{ classes: "repeater-item class2", firstName: "Ava", lastName: "Deleon" },
	{ classes: "repeater-item class3", firstName: "Emily", lastName: "Goodwin" },
	{ classes: "repeater-item class4", firstName: "Richmond", lastName: "Hess" },
	{ classes: "repeater-item class5", firstName: "Pitts", lastName: "Osborn" },
	{ classes: "repeater-item class1", firstName: "Lela", lastName: "Page" },
	{ classes: "repeater-item class2", firstName: "Carmen", lastName: "Maxwell" },
	{ classes: "repeater-item class3", firstName: "Dana", lastName: "Thompson" },
	{ classes: "repeater-item class4", firstName: "Dominique", lastName: "Jensen" },
	{ classes: "repeater-item class5", firstName: "Freda", lastName: "Short" },
	{ classes: "repeater-item class1", firstName: "Cynthia", lastName: "Bass" },
	{ classes: "repeater-item class2", firstName: "Laurie", lastName: "Kim" },
	{ classes: "repeater-item class3", firstName: "Suarez", lastName: "Jarvis" },
	{ classes: "repeater-item class4", firstName: "Esperanza", lastName: "Camacho" },
	{ classes: "repeater-item class5", firstName: "Rachelle", lastName: "Lynch" },
	{ classes: "repeater-item class1", firstName: "Sonja", lastName: "Lowery" },
	{ classes: "repeater-item class2", firstName: "Nelda", lastName: "Benton" },
	{ classes: "repeater-item class3", firstName: "Bernadine", lastName: "Pratt" },
	{ classes: "repeater-item class4", firstName: "Welch", lastName: "Russo" },
	{ classes: "repeater-item class5", firstName: "Eileen", lastName: "Mays" },
	{ classes: "repeater-item class1", firstName: "Nell", lastName: "Conner" },
	{ classes: "repeater-item class2", firstName: "Carolina", lastName: "Hodges" },
	{ classes: "repeater-item class3", firstName: "Polly", lastName: "Mueller" },
	{ classes: "repeater-item class4", firstName: "Jimenez", lastName: "Goodman" },
	{ classes: "repeater-item class5", firstName: "Fowler", lastName: "Haley" },
	{ classes: "repeater-item class1", firstName: "Rios", lastName: "Watson" },
	{ classes: "repeater-item class2", firstName: "Kidd", lastName: "Mcmahon" },
	{ classes: "repeater-item class3", firstName: "Audrey", lastName: "Buchanan" },
	{ classes: "repeater-item class4", firstName: "Mcdonald", lastName: "Miles" },
	{ classes: "repeater-item class5", firstName: "Marcia", lastName: "Collins" },
	{ classes: "repeater-item class1", firstName: "Mason", lastName: "Owens" },
	{ classes: "repeater-item class2", firstName: "Hopper", lastName: "Hanson" },
	{ classes: "repeater-item class3", firstName: "Good", lastName: "Jacobs" },
	{ classes: "repeater-item class4", firstName: "Bryan", lastName: "Francis" },
	{ classes: "repeater-item class5", firstName: "Chris", lastName: "Payne" },
	{ classes: "repeater-item class1", firstName: "Russo", lastName: "Burgess" },
	{ classes: "repeater-item class2", firstName: "Carla", lastName: "Burke" },
	{ classes: "repeater-item class3", firstName: "Herman", lastName: "Stephenson" },
	{ classes: "repeater-item class4", firstName: "Garrison", lastName: "Santana" },
	{ classes: "repeater-item class5", firstName: "Freida", lastName: "Stevenson" },
	{ classes: "repeater-item class1", firstName: "Macias", lastName: "Bright" },
	{ classes: "repeater-item class2", firstName: "Wiley", lastName: "Simon" },
	{ classes: "repeater-item class3", firstName: "Cook", lastName: "Farmer" },
	{ classes: "repeater-item class4", firstName: "Baldwin", lastName: "Burch" },
	{ classes: "repeater-item class5", firstName: "Sabrina", lastName: "Schwartz" },
	{ classes: "repeater-item class1", firstName: "Hudson", lastName: "Medina" },
	{ classes: "repeater-item class2", firstName: "Jodi", lastName: "Wells" },
	{ classes: "repeater-item class3", firstName: "Curry", lastName: "Oneil" },
	{ classes: "repeater-item class4", firstName: "Mejia", lastName: "Mcneil" },
	{ classes: "repeater-item class5", firstName: "Carrie", lastName: "Rivas" },
	{ classes: "repeater-item class1", firstName: "Lowery", lastName: "Murphy" },
	{ classes: "repeater-item class2", firstName: "Pace", lastName: "Rivera" },
	{ classes: "repeater-item class3", firstName: "Gonzales", lastName: "Ramos" },
	{ classes: "repeater-item class4", firstName: "Irwin", lastName: "Rivers" },
	{ classes: "repeater-item class5", firstName: "Angelique", lastName: "Hardy" },
	{ classes: "repeater-item class1", firstName: "Branch", lastName: "Little" },
	{ classes: "repeater-item class2", firstName: "Yang", lastName: "Case" },
	{ classes: "repeater-item class3", firstName: "Douglas", lastName: "Marsh" },
	{ classes: "repeater-item class4", firstName: "Velma", lastName: "Joyner" },
	{ classes: "repeater-item class5", firstName: "Susanna", lastName: "Park" },
	{ classes: "repeater-item class1", firstName: "Billie", lastName: "Kirk" },
	{ classes: "repeater-item class2", firstName: "Melendez", lastName: "Fischer" },
	{ classes: "repeater-item class3", firstName: "Summer", lastName: "Reeves" },
	{ classes: "repeater-item class4", firstName: "Contreras", lastName: "Bradley" },
	{ classes: "repeater-item class5", firstName: "Taylor", lastName: "Miller" },
	{ classes: "repeater-item class1", firstName: "Hopkins", lastName: "Aguilar" },
	{ classes: "repeater-item class2", firstName: "Cleo", lastName: "Sullivan" },
	{ classes: "repeater-item class3", firstName: "Vazquez", lastName: "Flowers" },
	{ classes: "repeater-item class4", firstName: "Gibson", lastName: "Gilliam" },
	{ classes: "repeater-item class5", firstName: "Zimmerman", lastName: "Riggs" },
	{ classes: "repeater-item class1", firstName: "Mcintyre", lastName: "Mcgee" },
	{ classes: "repeater-item class2", firstName: "Hall", lastName: "Caldwell" },
	{ classes: "repeater-item class3", firstName: "Felicia", lastName: "Fitzpatrick" },
	{ classes: "repeater-item class4", firstName: "Delgado", lastName: "Cole" },
	{ classes: "repeater-item class5", firstName: "Burns", lastName: "Summers" },
	{ classes: "repeater-item class1", firstName: "Durham", lastName: "Dickerson" },
	{ classes: "repeater-item class2", firstName: "Lavonne", lastName: "Robles" },
	{ classes: "repeater-item class3", firstName: "Roberts", lastName: "Adams" },
	{ classes: "repeater-item class4", firstName: "Ayala", lastName: "Lawson" },
	{ classes: "repeater-item class5", firstName: "Lori", lastName: "Nolan" }
];

module.exports = kind({
	name: "enyo.sample.DataListSample",
	kind: Control,
	classes: "data-list-sample data-repeater-sample enyo-fit",
	components: [
		{name: "repeater", kind: DataList, components: [
			{components: [
				{classes: "name-wrapper", components: [
					{name: "firstName", classes: "name", tag: "span"},
					{name: "lastName", classes: "name last", tag: "span"},
					{name: "lastNameLetter", classes: "name last-letter", tag: "span"}
				]}
			], bindings: [
				{from: ".model.firstName", to: ".$.firstName.content"},
				{from: ".model.lastName", to: ".$.lastName.content"},
				{from: ".model.lastName", to: ".$.lastNameLetter.content", transform: function (v) { return v && v.charAt(0); }},
				{from: ".model.classes", to: ".classes"}
			]}
		]}
	],
	bindings: [
		{from: ".collection", to: ".$.repeater.collection"}
	],
	create: kind.inherit(function (sup) {
		return function () {
			this.collection = new Collection(data);
			sup.apply(this, arguments);
		};
	}),
	
});
