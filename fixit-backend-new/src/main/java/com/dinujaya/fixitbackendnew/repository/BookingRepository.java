package com.dinujaya.fixitbackendnew.repository;

import com.dinujaya.fixitbackendnew.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BookingRepository extends JpaRepository<Booking,Long> {
    List<Booking> findByNameContainingIgnoreCase(String name);
    List<Booking> findByDeviceContainingIgnoreCase(String device);
    List<Booking> findByEmailContainingIgnoreCase(String email);
    List<Booking> findByMobileContainingIgnoreCase(String mobile);
    List<Booking> findByStatusContainingIgnoreCase(String status);
}
