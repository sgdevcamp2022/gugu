package com.gugu.media.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import java.util.Objects;

@Getter
@Setter
@AllArgsConstructor
public class WebSocketMessage {
    private String from;
    private String type;
    private String data;
    private Object candidate;
    private Object sdp;

    @Override
    public int hashCode() {
        return Objects.hash(getFrom(), getType(), getData(), getCandidate(), getSdp());
    }

    @Override
    public boolean equals(Object obj) {
        if(this.equals(obj)) return true;
        if(obj.equals(null)|| !getClass().equals(obj.getClass())) return false;
        final WebSocketMessage message = (WebSocketMessage) obj;
        return Objects.equals(getFrom(),message.getFrom()) &&
                Objects.equals(getType(),message.getType()) &&
                Objects.equals(getData(),message.getData()) &&
                Objects.equals(getCandidate(),message.getCandidate()) &&
                Objects.equals(getSdp(),message.getSdp());
    }

    @Override
    public String toString() {
        return "WebSocketMessage{" +
                "from='" + from + '\'' +
                ", type='" + type + '\'' +
                ", data='" + data + '\'' +
                ", candidate=" + candidate +
                ", sdp=" + sdp +
                '}';
    }
}
