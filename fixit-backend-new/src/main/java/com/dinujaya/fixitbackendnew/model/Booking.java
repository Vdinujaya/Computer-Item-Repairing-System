package com.dinujaya.fixitbackendnew.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "Bookings")
public class Booking {

    @Id
    @GeneratedValue
    private Long id;
    private String email;
    private String name;
    private String mobile;
    private String device;
    private String service;
    private String booking_date;
    private String issue;

    private String new_booking;

    private String status;
    private String other_details;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getDevice() {
        return device;
    }

    public void setDevice(String device) {
        this.device = device;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getBooking_date() {
        return booking_date;
    }

    public void setBooking_date(String booking_date) {
        this.booking_date = booking_date;
    }

    public String getIssue() {
        return issue;
    }

    public void setIssue(String issue) {
        this.issue = issue;
    }

    public String getNew_booking() {
        return new_booking;
    }

    public void setNew_booking(String new_booking) {
        this.new_booking = new_booking;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getOther_details() {
        return other_details;
    }

    public void setOther_details(String other_details) {
        this.other_details = other_details;
    }
}
