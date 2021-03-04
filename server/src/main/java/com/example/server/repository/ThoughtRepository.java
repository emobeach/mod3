package com.example.server.repository;

import com.example.server.model.Thought;
import org.springframework.data.repository.CrudRepository;

public interface ThoughtRepository extends CrudRepository<Thought, Long> {
}
