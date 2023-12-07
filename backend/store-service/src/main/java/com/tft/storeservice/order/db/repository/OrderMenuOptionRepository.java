package com.tft.storeservice.order.db.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tft.storeservice.order.db.entity.OrderMenuOption;

public interface OrderMenuOptionRepository extends JpaRepository<OrderMenuOption, Long> {
}
