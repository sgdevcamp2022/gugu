package com.example.community.server.adapter.in.web;

import com.example.community.server.adapter.out.persistence.CreateServerRequestDto;
import com.example.community.server.application.port.in.CreateServerUserCase;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@AutoConfigureMockMvc(addFilters = false)
@WebMvcTest(controllers = ServerController.class)
class ServerControllerTest {
    @Autowired
    private MockMvc mockMvc;

    /*
    @MockBean
    private CreateServerUserCase createServerUserCase;
     */

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testCreateServer() throws Exception{
        //CreateServerRequestDto serverRequestDto = new CreateServerRequestDto("myServer");

        mockMvc.perform(post("/server")
                        .contentType(MediaType.APPLICATION_JSON)
                        .characterEncoding("utf-8")
                        .content(objectMapper.writeValueAsString(new CreateServerRequestDto("myServer", ""))))
                        .andExpect(status().isCreated())
                .andDo(print());

        /*
        then(createServerUserCase).should()
                .createServer(eq(new CreateServerCommand("myServer")));
         */
    }
}