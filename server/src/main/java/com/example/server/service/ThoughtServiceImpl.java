package com.example.server.service;

import com.example.server.model.Thought;
import com.example.server.repository.ThoughtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class ThoughtServiceImpl implements ThoughtService{
    @Autowired
    ThoughtRepository thoughtRepository;

    @Override
    public Iterable<Thought> getThoughts() { return thoughtRepository.findAll(); }

    @Override
    public Thought createThought(Thought thought) { return thoughtRepository.save(thought); }

    @Override
    public Thought updateThought(Thought thought) { return thoughtRepository.save(thought); }

    @Override
    public HttpStatus deleteThought(Long id){
        thoughtRepository.deleteById(id);
        return HttpStatus.OK;
    }
}
