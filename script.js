//🏆 Code Question 1
//-1 Teoricamente, dovrebbe uscire in console `Double Cheese Burger` in entrambi i console.log
//-2 Solo 1 oggetto. `secondBurger` è solo un riferimento allo stesso oggetto `hamburger`

//🏆 Code Question 2
//-1 Teoricamente, dovrebbe stampare `Salad` in console.log
//-2 Vengono creati 3 oggetti: Oggetto `hamburger`, array `ingredients` e oggetto `secondBurger`

//🏆 Code Question 3
//-1 Teoricamente 9 in qunato structuredClone crea copie totalmente indipendenti:
// `hamburger`: 1 oggetto + `maker` + `restaurant` = 3
// `secondBurger`: nuova copia profonda = 3
// `thirdBurger`: nuova copia profonda = 3

//🏆 Code Question 4
//-1 Per clonare `chef`, in linea teorica si potrebbe usare una deep copy che gestisce le funzioni,
//  perchè JSON e structuredClone ignorano le funzioni.
//-2 Per clonare `restaurant`, invece si potrebbe usare structuredClone(restaurant),
//  perchè contiene oggetti annidati, ha un Date (che Json trasforma in stringa) e non contiene funzioni

//🎯 Code Question 5 (Bonus)
//-1 In linea teorica dovrebbe uscire:
//Anonymous Chef
//Chef Hyur
//Hyur's Burgers
//Hyur's II
//-2 Dovrebbe aver creato 5 oggetti:
//`hamburger`, `maker`, `restaurant` (originale), `newRestaurant` (oggetto nuovo), `secondBurger` (shallow copy)

//🎯 Code Question 6 (Bonus)
//-1 Teoricamente si potrebbe usare una funzione di deep copy ricorsiva, dato che
//  structuredClone e JSON non vanno bene perchè ignorano/mettono undefined sulle funzioni

//🎯 Snack  (Bonus) Creazione funzione
function deepCopyWithFunctions(obj) {
    if (obj === null) return null;
    if (typeof obj !== 'object') return obj;
    if (typeof obj === 'function') return obj;
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopyWithFunctions(item));
    }

    const clone = {};
    for (let key in obj) {
        clone[key] = deepCopyWithFunctions(obj[key]);
    }
    return clone;
}

//Test con oggetto di Code Question 6
const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
};

const clonedChef = deepCopyWithFunctions(chef);

// Test + Risultati commentati
clonedChef.makeBurger(2); // Ecco 2 hamburger per te!
clonedChef.restaurant.welcomeClient(); // Benvenuto!
clonedChef.restaurant.address.showAddress(); // Main Street 123