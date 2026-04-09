package com.klu.studentbackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klu.studentbackend.model.Student;
import com.klu.studentbackend.repository.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repository;

    public Student addStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student updateStudent(Long id, Student student) {
        Student s = repository.findById(id).orElseThrow();
        s.setName(student.getName());
        s.setEmail(student.getEmail());
        s.setCourse(student.getCourse());
        return repository.save(s);
    }

    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
}