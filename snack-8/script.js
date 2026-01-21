const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

//faccendo lo stesso ragionamento dello snack 7:

const classeMarco = students.find((studente) => { //buonanotta stavo usando il filter ma devo usare il find
  return studente.name === "Marco Lanci";

}
);

console.log(classeMarco.class);
