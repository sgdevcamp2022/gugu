package com.gugu.media.application.service;

import com.gugu.media.domain.Room;
import com.gugu.media.utils.Parser;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
@Slf4j
@RequiredArgsConstructor
public class SignalingServiceImpl implements SignalingService {
    private final RoomService roomService;
    private final Parser parser;
    @Override
    public Map<String, Object> displayMainPage(final Long id, final String uuid) {
        Map<String, Object> data = new HashMap<>();
        data.put("id", id);
        data.put("rooms", roomService.getRooms());
        data.put("uuid", uuid);
//        final ModelAndView modelAndView = new ModelAndView("main");
//        modelAndView.addObject("id", id);
//        modelAndView.addObject("rooms", roomService.getRooms());
//        modelAndView.addObject("uuid", uuid);

        return data;
    }

    @Override
    public Map<String, Object> processRoomSelection(final String sid, final String uuid, final BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            // simplified version, no errors processing
            log.info("aa");
        }
        Optional<Long> optionalId = parser.parseId(sid);
        optionalId.ifPresent(id -> Optional.ofNullable(uuid).ifPresent(name -> roomService.addRoom(new Room(id))));

        return this.displayMainPage(optionalId.orElse(null), uuid);
    }

    @Override
    public Map<String, Object> processRoomExit(final String sid, final String uuid) {
        if(sid != null && uuid != null) {
            log.debug("User {} has left Room #{}", uuid, sid);
            // implement any logic you need
        }
        return null;
    }

    @Override
    public Map<String, Object> displaySelectedRoom(String sid, String uuid) {
        // redirect to main page if provided data is invalid
        Map<String,Object> data = new HashMap();
        if (parser.parseId(sid).isPresent()) {
            Room room = roomService.findRoomByStringId(sid).orElse(null);
            if(room != null && uuid != null && !uuid.isEmpty()) {
                log.debug("User {} is going to join Room #{}", uuid, sid);
                return null;
            }
            data.put("room", room);
        }
        return data;
    }


}
