package com.example.server.service;

import com.example.server.model.Thought;
import org.springframework.http.HttpStatus;

public interface ThoughtService {
    Iterable<Thought> getThoughts();
    Thought createThought(Thought Thought);
    Thought updateThought(Thought Thought);
    HttpStatus deleteThought(Long id);
}
