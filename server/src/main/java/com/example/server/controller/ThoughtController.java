package com.example.server.controller;


import com.example.server.model.Thought;
import com.example.server.service.ThoughtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("thoughts")
public class ThoughtController {
    @Autowired
    ThoughtService thoughtService;

    @GetMapping
    public Iterable<Thought> getThoughts() { return thoughtService.getThoughts(); }

    @PostMapping
    public Thought createThought(@RequestBody Thought thought) { return thoughtService.createThought(thought); }

    @PatchMapping
    public Thought updateThought(@RequestBody Thought thought) { return thoughtService.updateThought(thought); }

    @DeleteMapping("{id}")
    public HttpStatus deleteThought(@PathVariable Long id) { return thoughtService.deleteThought(id); }
}
