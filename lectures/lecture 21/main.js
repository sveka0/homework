const fruits = 'aplle banana cantalupe grapfruit'
const array = fruits.split(' ');

console.log(array);


const fruits1 = 'aplle banana cantalupe grapfruit'
for (const fruit of array)
   console.log(fruit);

const fruits2 = 'aplle banana cantalupe grapfruit'
let index = 0;

    while (index < fruits2.length) {
        console.log(fruits2[index]);
        index ++;
    }

    const fruits3 = 'aplle banana cantalupe grapfruit'
    let index1 = 0;

    do {
        console.log(fruits3[index1]);
        index1 ++;
    } while (index1 < fruits3.length);

    const fruits4 = 'aplle banana cantalupe grapfruit'
    let index2 = 0;

    for (const fruit4 of fruits) {
        console.log(fruit4);
        index2 ++;
    }


    const Numbs = [1,2,3,4,5,6,7,8,9,10];
    for (let i = 0; i < Numbs.length; i++) {
        if (Numbs[i] % 2 === 0) {
            console.log(Numbs[i]);
        }
    }
    const names = ['Batman'];
    names.push('Joker');
    console.log(names);

    const names1 = ['Batman'];
    names1.unshift('Joker');
    console.log(names1);

    let names2 = ['Batman', 'Joker', 'Bane'];
     names2 = ['Catwoman', ...names];
     console.log(names2);

     let names3 = ['Batman', 'Joker', 'Bane'];
     names3 = [...names.slice(0, 1), 'Catwoman', ...names.slice(1)];
     console.log(names3);

     const names4 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
     const filterNames = names.filter(name => name !== 'Catwoman' && name !== 'Joker');
     console.log(filterNames);

     const names5 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
     const catwomanIndex = names5.indexOf('Catwoman');
     const jokerIndex = names5.indexOf('Joker');
     if (catwomanIndex !== -1) {
         names5.splice(catwomanIndex, 1);
     }
     if (jokerIndex !== -1) {
         names5.splice(jokerIndex, 1);
     }
     console.log(names5);

     const names6 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
     const modifiedName = names6.map(name => {
        if (name === 'Catwoman' || name === 'Joker') {
            return 'Alfred'
        } else {
            return name
        }
     });
     console.log(modifiedName);

     const names7 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
        if (!names.includes('Alfred')) {
           names.push ('Alfred');
        }
     console.log(names7);


     const names8 = ['Batman', 'Catwoman', 'Joker', 'Bane'];
     const alfredIndex = names.indexOf('Alfred');
     if (alfredIndex!== -1) {
         names.splice(alfredIndex, 1);
     }

     console.log(names8);


     
     




    


    
    






