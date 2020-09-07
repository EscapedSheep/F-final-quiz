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

export function getGroupTeam() {
  const url = 'http://localhost:8080/students/group';
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

export function changeTeamName(oldN, newN) {
  const url = 'http://localhost:8080/team';
  const request = {
    oldName: oldN,
    newName: newN
  }
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(request),
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
    .then((res) => res.json())
    .catch((err) => err);
}