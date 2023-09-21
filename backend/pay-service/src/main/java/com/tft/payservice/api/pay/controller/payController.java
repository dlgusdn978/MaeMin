package com.tft.payservice.api.pay.controller;

import com.tft.payservice.api.pay.dto.request.*;
import com.tft.payservice.api.pay.dto.response.PayConfirmRes;
import com.tft.payservice.api.pay.dto.response.PayListRes;
import com.tft.payservice.api.pay.service.PayService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.MalformedURLException;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/pay")
public class payController {

    private final PayService payService;

    @PostMapping("/user")
    public ResponseEntity<?> createPayUser(@RequestBody PayJoinReq payJoinReq) {
        payService.createPayUser(payJoinReq);

        return ResponseEntity.status(200).body(null);
    }



    @GetMapping
    public ResponseEntity<PayListRes> getPayList() {
        PayListRes payList = payService.getPayList();

        return ResponseEntity.status(200).body(payList);
    }

    @PostMapping
    public ResponseEntity<?> createPay(@RequestBody PayRegistReq payRegistReq) throws Exception {
//        payService.createPay(payRegistReq);

        return ResponseEntity.status(200).body(null);
    }

    @DeleteMapping("/{payId}")
    public ResponseEntity<?> deletePay(@RequestParam Long payId) {
        payService.deletePay(payId);

        return ResponseEntity.status(200).body(null);
    }

    @PostMapping("/authentication")
    public ResponseEntity<?> authenticationPayment(@RequestBody PayAuthenticationReq payAuthenticationReq) {
        payService.authenticationPayment(payAuthenticationReq);

        return ResponseEntity.status(200).body(null);
    }

    @PostMapping("/confirm")
    public ResponseEntity<PayConfirmRes> confirmPayment(@RequestBody PayConfirmReq payConfirmReq) {
        PayConfirmRes payConfirm = payService.confirmPayment(payConfirmReq);

        return ResponseEntity.status(200).body(payConfirm);
    }

    @PostMapping("/approve")
    public ResponseEntity<?> approvePayment(@RequestBody PayApproveReq payApproveReq) {
        payService.approvePayment(payApproveReq);

        return ResponseEntity.status(200).body(null);
    }

}
