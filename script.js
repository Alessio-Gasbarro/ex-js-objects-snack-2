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