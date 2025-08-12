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

// 1. Born in 1500s
const bornIn1500s = inventors.filter(i => i.year >= 1500 && i.year < 1600);
document.getElementById('bornIn1500s').textContent = JSON.stringify(bornIn1500s, null, 2);

// 2. Full names
const fullNames = inventors.map(i => `${i.first} ${i.last}`);
document.getElementById('fullNames').textContent = fullNames.join('\n');

// 3. Sorted by birthdate
const sortedByBirthdate = inventors.slice().sort((a, b) => a.year - b.year);
document.getElementById('sortedByBirthdate').textContent = JSON.stringify(sortedByBirthdate, null, 2);

// 4. Total years lived
const totalYears = inventors.reduce((total, i) => total + (i.passed - i.year), 0);
document.getElementById('totalYears').textContent = totalYears;

// 5. Sorted by years lived
const sortedByYearsLived = inventors.slice().sort((a, b) => (b.passed - b.year) - (a.passed - a.year));
document.getElementById('sortedByYearsLived').textContent = JSON.stringify(sortedByYearsLived, null, 2);

// 6. Sorted people alphabetically by last name
const sortedPeople = people.slice().sort((a, b) => {
  const [aLast] = a.split(', ');
  const [bLast] = b.split(', ');
  return aLast.localeCompare(bLast);
});
document.getElementById('sortedPeople').textContent = sortedPeople.join('\n');
