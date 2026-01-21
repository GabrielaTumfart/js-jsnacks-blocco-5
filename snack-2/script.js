const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//provo ad usare il forEach che abbiamo imparato oggi da Tiziano

people.forEach((persona) => {
const {name} = persona;
console.log(name);
});
