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

let goodBooks = []          //geru knygu masyvas
for(let theme of catalog){
    for(let data in theme){
        console.log(data)
        console.log("Kategorijoje yra " + theme[data].length + " knygos")
        theme[data].sort(function(a, b) {
            var pavA = a.Pavadinimas.toUpperCase(); // ignore upper and lowercase
            var pavB = b.Pavadinimas.toUpperCase(); // ignore upper and lowercase
            if (pavA < pavB) {
              return -1;
            }
            if (pavA > pavB) {
              return 1;
            }
          
            // names must be equal
            return 0;
          });
        for(let book of theme[data]){
            for(let info in book) {
                let price1 = []
                if(info === 'price') {              // funkcija kainos pakėlimui
                    price1.push(book[info])
                    const map1 = price1.map(x => x * 1.15);
                    book[info] = map1
                }
                if(info === 'Pavadinimas'){
                    goodBooks.push(book[info])
                }
                if (info === 'Leidimo metai' && book[info] === 2021) {
                    console.log(info + ": " + book[info] + " (nauja knyga)")
                } else {
                    console.log(info + ": " + book[info])
                }

                
            }
            console.log("-----------------")
        }
    console.log("//----------------------------------------//")
    }

}


const result = goodBooks.filter(goodBooks => goodBooks.length > 20);            // funkcija, surasti knygas ilgesnes nei 20 simboliu
console.log('Tinkamos knygos:')
for(let good of result)
{
    console.log(good)
}

    
