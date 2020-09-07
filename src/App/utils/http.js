export function fetchStudents() {
  const url = 'http://localhost:8080/students';
  return fetch(url)
    .then((res) => res.json() )
    .catch((err) => err )
}

export function fetchTeam() {
  const url = 'http://localhost:8080/students/team';
  return fetch(url)
    .then((res) => res.json() )
    .catch((err) => err )
}

export function addStudent(name) {
  const url = 'http://localhost:8080/students';
  return fetch(url, {
    method: 'POST',
    body: name
  })
    .then((res) => res.json())
    .catch((err) => err);
}