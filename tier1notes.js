/*
This is really good! I'd strongly recommend committing more often. Every time
you get something new working (probably every 30 minutes or so), make a commit.
You're saving your progress so that if something goes wrong, you can go back!
*/

/*
Wow! This is really fancy stuff.

=== is usually preferred over ==

This can be called a factory function -- it builds objects. Usually, we will
use constructor functions instead, but they work very similarly.

Or, even better, we'll use class syntax to achieve the same thing!

FYI, your fullName is a method.

Here is your code rewritten as a class!
*/


class Person {

    constructor(firstName, lastName, age, adventurous, food, pets, allowedPets)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.adventurous = adventurous;
        this.food = food;
        this.pets = pets;
        this.allowedPets = allowedPets;
    }

    //methods
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    speak (say) {
      console.log( `${this.fullName()}: ${say}` );
    }

    intro () {
        this.speak ( `My name is ${this.fullName()} and I am ${this.age} years old!` );
    }

    makeFriend (friend1, friend2) {
      friend1.friend = friend2;
      friend2.friend = friend1;
      this.speak(`${this.friend.fullName()} and I are now friends!`);
    }

    partyTime () {
      if ((age > 18) && (this.adventurous)) {
        this.speak( 'Woohoo!' );
      } else {
        this.speak( `Let's stay home and eat some ${this.food}...` )
      }
    }

    checkPets () {
      this.speak('Let me check my pets...');
      if (this.pets > allowedPets) {
        this.speak ( `I need to get rid of ${this.pets - this.allowedPets} pets.` );
        this.pets-= (this.pets - this.allowedPets);
        this.speak ( `(got rid of a pet)` );
      } else if (this.pets < allowedPets) {
        this.speak ( `I could get ${this.allowedPets - this.pets} more pets.` );
      } else if (this.pets == this.allowedPets) {
        this.speak ( `I have as many pets as I'm allowed (which is ${this.pets}).` );
      }
    }

    getPets () {
      this.speak ( `(got a pet)` );
      this.pets++;
    }

    petDiff () {
      return Math.abs(this.pets - this.friend.pets);
    }

    comparePets () {
      if (this.pets > this.friend.pets) {
        this.speak (`I have ${this.petDiff()} more pets than ${friend.fullName()}` );
      } else if (this.pets < this.friend.pets) {
        this.speak ( `${this.friend.fullName()} has ${this.petDiff()} more pets than I do` );
      } else if (this.pets == this.friend.pets) {
        this.speak ( `${friend.firstName()} and I have the same number of pets!` );
      }
    }

    maxPets () {
      do {
        this.getPets();
      } while (this.pets < this.allowedPets);
    }
  }
}





//poor formatting
function parkCar (name = 'nobody home') {
  if (parkedCars.length < maxCars) {
  parkedCars.push(name);
//pushes the identified car onto the end of our garage's array
  console.log(`We'll take good care of your ${name.make}`);
} else {
  console.log( 'We don\'t got enough space!' );
//identifies that something was wrong by returning false.
  return false;
}
}

//better
function parkCar(name = 'nobody home') {
  if (parkedCars.length < maxCars) {
    parkedCars.push(name);
    //pushes the identified car onto the end of our garage's array
    console.log(`We'll take good care of your ${name.make}`);
  } else {
    console.log('We don\'t got enough space!');
    //identifies that something was wrong by returning false.
    return false;
  }

/*
It looks like you're having fun with the content!
function parkCar (name = 'nobody home') -- this is making the default of name
 to be 'nobody home' if we forget to pass a car to this function. IDK if that
 is desired since a car is an object and your default is a string, but neat!
Your isParkedHere function is very verbose, but also brittle. If I enter the
 same info in a different order it wont work because you're comparing strings.
 A better pattern would be to pass into the function an object instead and
 compare the keys.
Your takeForASpin function doesnt return anything!*/
/*
Nice work this week!

Make sure you know that {title, artist, year} is a shortcut -- it only works if
 you want the keys of the object to match existing variable names. Here is the
 long form: {title : title, artist: artist, year: year}

You like to use bracket notation, and it works, but dot notation is more
 popular for most use needs.

Your allBy has a syntax error in it. You're not actually calling the allBy
function in your code.

Your code is really well ABSTRACTED, which is a goal for some developers. Be
 aware that as we make more abstract code, it gets more difficult for others to
 read. You've left comments which is critical here. I would find a better name
 for predicate. But also be aware that when working with others, they may not
 be able to read this code as well as you can, and so make sure you know
 exactly how this is behaving and how you could make it more readable
 for others.

Here is a little more readable function for predicate. Still dense, but at
 least walks us through the parts:
*/
const predicate = (index, recordToCheck) => {
  const currentCriteriaKeyWord = keyWords[index];
  const doesRecordHaveMatchingCriteria = recordToCheck[currentCriteriaKeyWord] == criteria[currentCriteriaKeyWord];
  keyMatches.push(doesRecordHaveMatchingCriteria);
};
