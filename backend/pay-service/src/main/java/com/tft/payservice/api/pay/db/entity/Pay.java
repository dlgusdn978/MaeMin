package com.tft.payservice.api.pay.db.entity;

import lombok.*;
import org.hibernate.annotations.DynamicInsert;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
//@NoArgsConstructor
@DynamicInsert
@Table(name = "pay")
@Entity
public class Pay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long payId; // 페이 식별 ID

    @NotNull
    private Long userId;

    @NotNull
    private String company; // 카드사

    @NotNull
    private String basicInfo;   // 마스킹 된 카드번호 일부

    private String nickname;    // 미설정 시 카드사+기본정보

    @NotNull
    private String billingKey;  // 카드사로부터 발급

    @NotNull
    private String payPw;   // salt 및 key streching 적용값

    private String salt;

    private int keyStreching;   // 1 ~ 5 사이 랜덤값

}
