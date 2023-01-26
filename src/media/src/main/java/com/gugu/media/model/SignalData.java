package com.gugu.media.model;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SignalData {
    private String userId;
    private String type;
    private String  data;
    private String  toUid;
}
