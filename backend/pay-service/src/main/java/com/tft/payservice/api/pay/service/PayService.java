package com.tft.payservice.api.pay.service;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonObject;
import com.tft.payservice.api.pay.db.entity.Pay;
import com.tft.payservice.api.pay.db.entity.PayUser;
import com.tft.payservice.api.pay.db.repository.PayRepository;
import com.tft.payservice.api.pay.db.repository.PayUserRepository;
import com.tft.payservice.api.pay.dto.PayDto;
import com.tft.payservice.api.pay.dto.request.*;
import com.tft.payservice.api.pay.dto.response.CardRegistRes;
import com.tft.payservice.api.pay.dto.response.PayConfirmRes;
import com.tft.payservice.api.pay.dto.response.PayListRes;
import com.tft.payservice.common.util.HashUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static com.tft.payservice.common.util.LogCurrent.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class PayService {

    private final PayRepository payRepository;
    private final PayUserRepository payUserRepository;
    private final String COMPANY = "SF카드";
    @Value("${custom.hash.pepper}")
    private static String PEPPER;
    private static Gson gson = new GsonBuilder()
            .serializeNulls()
            .setPrettyPrinting()
            .create();

    @Value("${custom.card.CARD_URL}")
    private String CARD_URL;

    public PayListRes getPayList() {
        log.info(logCurrent(getClassName(), getMethodName(), START));

        /**
         *  JWT or ContextHolder에서 yserId 추출하여 사용
         */
        Long userId = 1L;

        List<PayDto> payList = new ArrayList<>();
        Optional<PayUser> payUser = payUserRepository.findByUserId(userId);
        if (payUser.isPresent()) {
            List<Pay> list = payUser.get().getPays();

            for (Pay item : list) {
                PayDto pay = PayDto.builder()
                        .payId(item.getPayId())
                        .company(item.getCompany())
                        .basicInfo(item.getBasicInfo())
                        .nickname(item.getNickname())
                        .build();
                payList.add(pay);
            }
        }

        PayListRes res = PayListRes.builder()
                .payList(payList)
                .build();

        log.info(logCurrent(getClassName(), getMethodName(), END));
        return res;
    }


    public void createPayUser(PayJoinReq payJoinReq) {
        log.info(logCurrent(getClassName(), getMethodName(), START));

        log.info(logCurrent(getClassName(), getMethodName(), END));
    }

    @Transactional
//    public void createPay(PayRegistReq payRegistReq) throws Exception {
//        log.info(logCurrent(getClassName(), getMethodName(), START));
//
//        /**
//         *  JWT or ContextHolder에서 yserId 추출하여 사용
//         */
//        Long userId = 1L;
//
//        Optional<PayUser> user = payUserRepository.findByUserId(userId);
//        if (user.isEmpty()) {
//            int keyStreching = (int) ((Math.random() * 10000) % 5) + 1;
//
//            String salt = HashUtil.getSalt();
//            String hashingPassword = HashUtil.hashing(payRegistReq.getPayPw().getBytes(), PEPPER, salt, keyStreching);
//            user = Optional.of(PayUser.builder()
//                    .userId(userId)
//                    .payPw(hashingPassword)
//                    .salt(salt)
//                    .keyStreching(keyStreching)
//                    .build());
//        }
//
//        JsonObject jsonObject = new JsonObject();
//        jsonObject.addProperty("cardNumber", payRegistReq.getCardNumber());
//        jsonObject.addProperty("cardExpireDate", payRegistReq.getCardExpireDate());
//        jsonObject.addProperty("cvc", payRegistReq.getCvc());
//        jsonObject.addProperty("password", payRegistReq.getCardPw());
//
//        String requestBody = gson.toJson(jsonObject);
//
//        // Connection Set
//        URL url = new URL(CARD_URL+"/card");
//        HttpURLConnection con = (HttpURLConnection) url.openConnection();
//        con.setRequestMethod("POST");
//        con.setRequestProperty("Content-Type", "application/json; utf-8");
//        con.setRequestProperty("Accept", "application/json");
//        con.setRequestProperty("Content-Length", Integer.toString(requestBody.getBytes().length));
//        con.setRequestProperty("Content-Language", "ko-KR");
//
//        con.setUseCaches(false);    // 캐싱 데이터를 받을지 설정
//        con.setDoOutput(true);  // 쓰기 모드 설정
//
//        // Send Request
//        try(OutputStream os = con.getOutputStream()) {
//            byte[] input = requestBody.getBytes("utf-8");
//            os.write(input, 0, input.length);
//        }
//
//        // Receive Response
//        int status = con.getResponseCode();
//        CardRegistRes body = new CardRegistRes();
//
//        if (200 <= status && status < 300) {
//
//            try (BufferedReader br = new BufferedReader(
//                    new InputStreamReader(con.getInputStream(), "utf-8"))) {
//                StringBuilder res = new StringBuilder();
//                String responseLine = null;
//                while ((responseLine = br.readLine()) != null) {
//                    res.append(responseLine.trim());
//                }
//                body = gson.fromJson(res.toString(), CardRegistRes.class);
//            }
//
//            con.disconnect();
//
////            // 등록된 간편 결제 정보 저장
////            int keyStreching = (int) ((Math.random() * 10000) % 5) + 1;
////
////            String salt = HashUtil.getSalt();
//            String hashingPassword = HashUtil.hashing(payRegistReq.getPayPw().getBytes(), PEPPER, user.get().getSalt(), user.get().getKeyStreching());
//
//            Pay pay = Pay.builder()
//                    .payUser(user.get())
////                    .userId(userId)
//                    .company(COMPANY)
//                    .basicInfo(payRegistReq.getCardNumber())
//                    .nickname(COMPANY + payRegistReq.getCardNumber().substring(0, 4))
//                    .billingKey(body.getBillingKey())
////                    .payPw(hashingPassword)
////                    .salt(salt)
////                    .keyStreching(keyStreching)
//                    .build();
//
//            payRepository.save(pay);
//        } else {
//            log.info(logCurrent(getClassName(), getMethodName(), END));
//            throw new RuntimeException();
//        }
//
//        log.info(logCurrent(getClassName(), getMethodName(), END));
//    }

    public void deletePay(Long payId) {
        log.info(logCurrent(getClassName(), getMethodName(), START));

        /**
         *  JWT or ContextHolder에서 yserId 추출하여 사용
         */
        Long userId = 1L;

        Pay pay = payRepository.findByPayId(payId)
                .orElseThrow(); // 없는 payId인 경우 예외 처리

//        if (!pay.getUserId().equals(userId)) {
//            throw new RuntimeException(); // 사용자의 페이가 아닐 경우
//        }

        payRepository.delete(pay);

        log.info(logCurrent(getClassName(), getMethodName(), END));
    }

    public void authenticationPayment(PayAuthenticationReq payAuthenticationReq) {
        log.info(logCurrent(getClassName(), getMethodName(), START));

        log.info(logCurrent(getClassName(), getMethodName(), END));
    }

    public PayConfirmRes confirmPayment(PayConfirmReq payConfirmReq) {
        log.info(logCurrent(getClassName(), getMethodName(), START));

        log.info(logCurrent(getClassName(), getMethodName(), END));
        return null;
    }

    public void approvePayment(PayApproveReq payApproveReq) {
        log.info(logCurrent(getClassName(), getMethodName(), START));

        log.info(logCurrent(getClassName(), getMethodName(), END));
    }

}
