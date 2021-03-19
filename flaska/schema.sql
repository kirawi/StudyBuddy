DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS meetinglist;
DROP TABLE IF EXISTS meetings;
DROP TABLE IF EXISTS classlist;
DROP TABLE IF EXISTS classes;
CREATE TABLE student (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_email TEXT UNIQUE NOT NULL,
    student_name TEXT NOT NULL
);
CREATE TABLE meetinglist (
    meeting_id INTEGER NOT NULL,
    student_id INTEGER NOT NULL,
    FOREIGN KEY (meeting_id) REFERENCES meetings (id),
    FOREIGN KEY (student_id) REFERENCES student (id)
);
CREATE TABLE meetings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    class_id INTEGER NOT NULL,
    link TEXT NOT NULL,
    teacher TEXT NOT NULL,
    time TIMESTAMP NOT NULL,
    date TIMESTAMP NOT NULL,
    FOREIGN KEY (teacher) REFERENCES classes (teacher),
    FOREIGN KEY (class_id) REFERENCES classes (id)
);
CREATE TABLE classlist (
    class_id INTEGER NOT NULL,
    student_id INTEGER NOT NULL,
    FOREIGN KEY (class_id) REFERENCES classes (id),
    FOREIGN KEY (student_id) REFERENCES student (id)
);
CREATE TABLE classes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    teacher TEXT NOT NULL,
    course_name TEXT NOT NULL,
    period INTEGER NOT NULL,
    section INTEGER NOT NULL
);