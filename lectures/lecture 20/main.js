var person = {
    name: 'John',
    age: 25
};

console.log(person.name);
console.log(person.age);

var person2 = {
    name: {
        firstName: 'John',
        lastName: 'Johnson'
    }
};


console.log(person2.name.firstName);
console.log(person2.name.lastName);
console.log(`${person2.name.firstName} ${person2.name.lastName}`);

var person3 = {
    name: {
        firstName: 'John',
        lastName: 'Johnson'
    },
    age: 25,
    bio: function () {
    console.log(this.name.firstName);
    console.log(this.name.lastName);
    console.log(this.age);
    }
};

person3.bio();

var person4 = {
    name: {
        firstName: 'John',
        lastName: 'Johnson'
    },
    age: 25,
    introduceSelf: function () {
    console.log("Hi! I'm", this.name.firstName + ".");
    }
};

person4.introduceSelf();

function createPerson(name) {
    return {
        name: name,
        introduceSelf: function () {
            console.log("Hi! I'm", this.name + ".");
        }
    };
}
    var person1 = createPerson('John');
    var person2 = createPerson('Alice');

    person1.introduceSelf();
    person2.introduceSelf();

    function Person (name) {
        var obj ={}
        obj.name = name;
         obj.introduceSelf = function () {
            console.log("Hi! I'm", this.name + ".");
        };
        return obj;
    }
    var mary = new Person('Mary');
    var tom = new Person('Tom');

    mary.introduceSelf();
    tom.introduceSelf();

    if ('prop' in mary) {
        console.log(mary.prop);
    } else {
        console.log('no prop');
    }

    // if (mary.prop !== undefined) {
    //    console.log(mary.prop);
    //} else {
     //   console.log('no prop');
    // }

    var DirtyMartini = {
        ingredients: {
            gin: 6,
            vermouth: 1,
            brine: 1,
            olives: 4
        },
        english_please: function() {
            console.log("ingredients:");
            console.log(`${this.ingredients.gin} fluid ounces gin`);
            console.log(`1 dash dry vermouth (${(1 * 28.4131).toFixed(7)} ml)`);
            console.log("1 fluid ounce brine from olive jar");
            console.log("4 stuffed green olives");
        },
        excuse_my_french: function() {
            console.log("ingrédients:");
            console.log(`${(this.ingredients.gin * 28.4131).toFixed(4)} ml de gin`);
            console.log(`1 trait de vermouth sec (${(1 * 28.4131).toFixed(7)} ml)`);
            console.log(`${(this.ingredients.brine * 28.4131).toFixed(4)} ml de saumure du pot d'olive`);
            console.log("4 olives vertes farcies");
        }
    };
    
    DirtyMartini.english_please();
    DirtyMartini.excuse_my_french();

    






