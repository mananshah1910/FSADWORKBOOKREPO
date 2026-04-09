package com.klu.studentbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.klu.studentbackend.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}