package com.example.demo.testCicd.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RequestMapping("/api/test")
@RequiredArgsConstructor
@Slf4j
@RestController
public class testController {

	@GetMapping
	public ResponseEntity<String> returnOne() {
		return ResponseEntity.ok("1234556");
	}

	@GetMapping("/test")
	public ResponseEntity<String> test(){
		return ResponseEntity.ok("test");
	}
}
