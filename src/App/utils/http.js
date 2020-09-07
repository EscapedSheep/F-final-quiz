export default function fetchStudents() {
  const url = 'http://localhost:8080/students';
  return fetch(url)
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return err;
    })
}