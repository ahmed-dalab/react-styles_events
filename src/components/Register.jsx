import { useState } from "react";
import styles from "./Register.module.css";

export default function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);
  const [students, setStudents] = useState([]);

  // onSubmit onChange

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      age,
    };
    setStudents([...students, data]);
    setName("");
    setAge(null);
    console.log(data);
  };
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Register</h2>
        <form onSubmit={onSubmit} className={styles.form}>
          <label className={styles.label}>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={styles.input}
          />
          <label className={styles.label}>Age</label>
          <input
            type="text"
            onChange={(e) => setAge(e.target.value)}
            className={styles.input}
            value={age}
          />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
      <div>
        <h2 className={styles.title}>Students</h2>
        {students.length === 0 && <p>No students registered</p>}
        {students.length > 0 && (
          <ul className={styles.list}>
            {students.map((student, index) => (
              <li key={index} className={styles.listItem}>
                <p>{student.name}</p>
                <p>{student.age}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
