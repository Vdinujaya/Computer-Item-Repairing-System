package com.dinujaya.fixitbackendnew.controller;

import com.dinujaya.fixitbackendnew.exception.BookingNotFoundException;
import com.dinujaya.fixitbackendnew.model.Booking;
import com.dinujaya.fixitbackendnew.repository.BookingRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin
public class BookingController {
    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping("/cusBooking")
    Booking newBooking(@RequestBody Booking newBooking){
        return bookingRepository.save(newBooking);
    }

    @GetMapping("/cusBookings")
    List<Booking> getAllBookings(){
        return bookingRepository.findAll();
    }

    @GetMapping("/cusBooking/{id}")
    Booking getUserById(@PathVariable Long id){
        return bookingRepository.findById(id).orElseThrow(()->new BookingNotFoundException(id));
    }

    @PutMapping("/cusBooking/{id}")
    Booking updateBooking(@RequestBody Booking newBooking,@PathVariable Long id){
        return bookingRepository.findById(id)
                .map(booking -> {
                    booking.setBooking_date(newBooking.getBooking_date());
                    booking.setNew_booking(newBooking.getNew_booking());
                    booking.setDevice(newBooking.getDevice());
                    booking.setEmail(newBooking.getEmail());
                    booking.setIssue(newBooking.getIssue());
                    booking.setName(newBooking.getName());
                    booking.setOther_details(newBooking.getOther_details());
                    booking.setMobile(newBooking.getMobile());
                    booking.setService(newBooking.getService());
                    booking.setStatus(newBooking.getStatus());
                    return bookingRepository.save(booking);
                }).orElseThrow(()->new BookingNotFoundException(id));
    }

    @DeleteMapping("/cusBooking/{id}")
    String deleteBooking(@PathVariable Long id){
        if(!bookingRepository.existsById(id)){
            throw  new BookingNotFoundException(id);
        }
        bookingRepository.deleteById(id);
        return "User With id "+id+" has been deleted success.";
    }

    @GetMapping("/cusBookingsByName/{name}")
    List<Booking> getBookingsByName(@PathVariable String name){
        return bookingRepository.findByNameContainingIgnoreCase(name);
    }
    @GetMapping("/cusBookingsByDevice/{device}")
    List<Booking> getBookingsByDevice(@PathVariable String device){
        return bookingRepository.findByDeviceContainingIgnoreCase(device);
    }
    @GetMapping("/cusBookingsByMobile/{mobile}")
    List<Booking> getBookingsByMobile(@PathVariable String mobile){
        return bookingRepository.findByMobileContainingIgnoreCase(mobile);
    }
    @GetMapping("/cusBookingsByEmail/{email}")
    List<Booking> getBookingsByEmail(@PathVariable String email){
        return bookingRepository.findByEmailContainingIgnoreCase(email);
    }
    @GetMapping("/cusBookingsByStatus/{status}")
    List<Booking> getBookingsByStatus(@PathVariable String status){
        return bookingRepository.findByStatusContainingIgnoreCase(status);
    }
}
