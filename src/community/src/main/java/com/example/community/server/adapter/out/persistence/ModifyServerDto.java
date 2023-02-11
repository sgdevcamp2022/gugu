package com.example.community.server.adapter.out.persistence;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ModifyServerDto {
    private String serverName;
    private String image;
}
