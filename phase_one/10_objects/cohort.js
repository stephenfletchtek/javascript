const cohort = {
  name: 'July 2022',
  id: 7963,
  students: ['bob', 'mary', 'jake', 'bill', 'felicity']
}

const print_cohort = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
}

print_cohort(cohort);
