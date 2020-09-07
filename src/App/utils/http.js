export function fetchStudents() {
  const url = 'http://localhost:8080/students';
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    })
}

export function fetchTeam() {
  const url = 'http://localhost:8080/students/team';
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    })
}