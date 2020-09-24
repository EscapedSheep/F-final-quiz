const baseUrl = 'http://localhost:8080/'

export function fetchStudents() {
  const url = `${baseUrl}trainees?grouped=false`;
  return fetch(url)
    .then((res) => res.json() )
    .catch((err) => {
      console.log(err)
    })
}

export function deleteStudent(id) {
  const url = `${baseUrl}trainees/${id}`;
  return fetch(url, {
    method: 'DELETE'
  })
    .then((res) => {
      if(res.status !== 204) {
        return res.json();
      }
      return null;
    })
    .catch((err) => console.log(err))
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

export function addStudent(student) {
  const url = `${baseUrl}trainees`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(student),
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
    .then((res) => res.json())
    .catch((err) => err);
}

export function changeTeamName(oldN, newN) {
  const url = 'http://localhost:8080/students/team';
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
