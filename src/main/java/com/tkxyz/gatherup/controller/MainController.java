package com.tkxyz.gatherup.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class MainController {
  @GetMapping("/") // localhost:9999 (default mapping)
  public String helloWorld() {
    return "Hello, world!";
  }
}
