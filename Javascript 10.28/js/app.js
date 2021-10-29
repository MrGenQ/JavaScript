/*
let students = [
    {
    'code': 101,
    'name': 'Ieva',
    'lname': 'ievaite',
    'subjects': [
        'PHP',
        'JS',
        'C++'
        ]
    },
    {
        'code': 103,
        'name': 'Giedre',
        'lname': 'ite',
        'subjects': [
            'PHP',
            'JS',
            'C++'
        ]
    },
    {
        'code': 107,
        'name': 'Jonas',
        'lname': 'etis',
        'subjects': [
            'PHP',
            'JS',
            'C++'
        ]
    },
    {
        'code': 109,
        'name': 'Tomas',
        'lname': 'bytas',
        'subjects': [
            'PHP',
            'JS',
            'C++'
        ]
    }

]


for(let student of students) {
    for (let studentData in student) {
        if (studentData !== 'subjects') {
            console.log(studentData + ": " + student[studentData])
        } else {
            let counter = 0;
            console.log("Dalykai:")
            for(let subject of student[studentData]){
                console.log(subject)
                counter++;
            }
            console.log("Kiek dalyku: " + counter)

        }
    }

    console.log("//----------------------------------//")
}
*/



//alert("veikia");

/*let name = "Vytautas";
console.log(typeof(name));
let count = 10;
console.log(typeof(count));
let sum = 10.12;
console.log(typeof(sum));
let online = false;
console.log(typeof(online));
let student = {
    age:19,
    name: "Karolis",
    subject: "JS"
}
console.log(typeof(student));
let data = [10, "Martynas", false];
console.log(data);
console.log(data.length);*/
/*let data = ["vytaytas", "vycka", "yolo"];
for(let item in data){              // priskiria indeksa
    console.log(data[item])
}
for(let item of data){          //priskiria reiksme
    console.log(item)
}
data.push("Monika")
console.log(data);
let name = prompt("Iveskite varda");
data.push(name);
console.log(data)*/

/*
let how_many = prompt("Ivesti kiek sveciu");
let guests = []
let black_list = prompt("Unwanted guest");
let how_many_wanted = how_many;
for(let i = 0; i < how_many; i++){
    let guest = prompt("Svecio vardas");
        if (guest !== black_list) {
            guests.push(guest);
        }
            else how_many_wanted--;
}
for(let i = 0; i < how_many_wanted; i++){
    console.log(guests[i]);
}*/
let catalog = [
    {
        'Fantastine':[
            {
                'ISBN': 'FA1236K',
                'Leidimo metai': 2020,
                'Pavadinimas': "Marsas Atakuoja",
                'Puslapiu skaicius': 350,
                'price': 50
            },
            {
                'ISBN': 'FA5736J',
                'Leidimo metai': 2021,
                'Pavadinimas': "Voveriukas",
                'Puslapiu skaicius': 220,
                'price': 40
            },
            {
                'ISBN': 'FA5136K',
                'Leidimo metai': 2021,
                'Pavadinimas': "Interstellar",
                'Puslapiu Skaicius': 700,
                'price': 35
            },
            {
                'ISBN': 'FA5478K',
                'Leidimo metai': 2000,
                'Pavadinimas': "Jonukas ir Peliukas",
                'Puslapiu Skaicius': 130,
                'price': 70.99
            }
        ]
    },
    {
        'Grozine':[
            {
                'ISBN': 'GR12DSK',
                'Leidimo metai': 2020,
                'Pavadinimas': "Marksas",
                'Puslapiu skaicius': 350,
                'price': 25
            },
            {
                'ISBN': 'GR57FSJ',
                'Leidimo metai': 2015,
                'Pavadinimas': "Pienes pienese",
                'Puslapiu skaicius': 333,
                'price': 79
            },
            {
                'ISBN': 'GR51FFK',
                'Leidimo metai': 2016,
                'Pavadinimas': "Jonas Jono Jone",
                'Puslapiu Skaicius': 405,
                'price': 6.99
            },
            {
                'ISBN': 'GR51GGK',
                'Leidimo metai': 1999,
                'Pavadinimas': "Kepti kotletus rugiuose",
                'Puslapiu Skaicius': 110,
                'price': 19.99
            }
        ]
    },
    {
        'Poemos':[
            {
                'ISBN': 'PO1JU6K',
                'Leidimo metai': 1896,
                'Pavadinimas': "Faustas",
                'Puslapiu skaicius': 99,
                'price': 50
            },
            {
                'ISBN': 'PO5KO6J',
                'Leidimo metai': 2011,
                'Pavadinimas': "Graikijos psalme",
                'Puslapiu skaicius': 223,
                'price': 50.99
            },
            {
                'ISBN': 'FATR36K',
                'Leidimo metai': 2005,
                'Pavadinimas': "Heraklis pries pasauli",
                'Puslapiu Skaicius': 150,
                'price': 9.99
            },
            {
                'ISBN': 'FA5777K',
                'Leidimo metai': 2019,
                'Pavadinimas': "Rukas",
                'Puslapiu Skaicius': 199,
                'price': 15.99
            }
        ]
    },
]
for(let theme of catalog){
    for(let data in theme){
        console.log(data)
        console.log("Kategorijoje yra " + theme[data].length + " knygos")
        let cheap1 = 0;
        let cheap2 = 0;
        for(let book of theme[data]){
            for(let info in book) {
                if(cheap1 > book[info] && info === 'price'){cheap1 = book[info]}
                if (info === 'Leidimo metai' && book[info] === 2021) {
                    console.log(info + ": " + book[info] + " (nauja knyga)")
                } else {
                    console.log(info + ": " + book[info])
                }
            }
            console.log("-----------------")
        }
        console.log("Pigiausia: " + cheap1)
    console.log("//----------------------------------------//")
    }

}
/*for(let student of students) {
    for (let studentData in student) {
        if (studentData !== 'subjects') {
            console.log(studentData + ": " + student[studentData])
        } else {
            let counter = 0;
            console.log("Dalykai:")
            for(let subject of student[studentData]){
                console.log(subject)
                counter++;
            }
            console.log("Kiek dalyku: " + counter)

        }
    }

    console.log("//----------------------------------//")
}*/