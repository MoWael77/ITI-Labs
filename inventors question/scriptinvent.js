// Data set of inventors
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// 1. Filter inventors born in the 1500s
const bornIn1500s = inventors.filter(inv => inv.year >= 1500 && inv.year < 1600);
console.log("Inventors born in 1500's:", bornIn1500s);

// 2. Array of first and last names
const fullNames = inventors.map(inv => `${inv.first} ${inv.last}`);
console.log("Inventors full names:", fullNames);

// 3. Sort by birthdate (oldest to youngest)
const orderedByBirth = inventors.sort((a, b) => a.year - b.year);
console.log("Inventors sorted by birth year:", orderedByBirth);

// 4. Total years lived by all inventors
const totalYearsLived = inventors.reduce((total, inv) => {
  return total + (inv.passed - inv.year);
}, 0);
console.log("Total years lived by all inventors:", totalYearsLived);

// 5. Sort inventors by years lived
const sortedByLifespan = inventors.sort((a, b) => {
  const lastPerson = a.passed - a.year;
  const nextPerson = b.passed - b.year;
  return lastPerson - nextPerson;
});
console.log("Inventors sorted by lifespan:", sortedByLifespan);

// 6. Sort people alphabetically by last name
const alphaSortedPeople = people.sort((a, b) => {
  const [aLast] = a.split(', ');
  const [bLast] = b.split(', ');
  return aLast.localeCompare(bLast);
});
console.log("People sorted by last name:", alphaSortedPeople);
