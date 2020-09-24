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

export function fetchTeachers() {
  const url = `${baseUrl}trainers?grouped=false`;
  return fetch(url)
    .then((res) => res.json() )
    .catch((err) => {
      console.log(err)
    })
}

export function addTeachers(n) {
  const url = `${baseUrl}trainers`;
  const teacher = {
    name: n
  }
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(teacher),
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
    .then((res) => res.json())
    .catch((err) => err);
}

export function deleteTeacher(id) {
  const url = `${baseUrl}trainers/${id}`;
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
  const url = `${baseUrl}groups`;
  return fetch(url)
    .then((res) => res.json() )
    .catch((err) => err )
}

export function autoGrouping() {
  const url = `${baseUrl}groups/auto-grouping`;
  return fetch(url, {
    method: 'POST'
  })
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

export function changeTeamName(id, n) {
  const url = `${baseUrl}groups/${id}`;
  const request = {
    name: n
  };
  return fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(request),
    headers: {
      'content-type': 'application/json; charset=utf-8'
    }
  })
    .then((res) => res.json())
    .catch((err) => err);
}
