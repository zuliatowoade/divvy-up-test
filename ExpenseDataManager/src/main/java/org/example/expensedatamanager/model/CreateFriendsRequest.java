package org.example.expensedatamanager.model;

import lombok.Data;

import java.time.LocalDate;

@Data
    public class CreateFriendsRequest {
        private Long userId;
        private LocalDate date;
    }
