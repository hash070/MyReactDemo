package top.hash070.reactdemobackend.reactdemobackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class ReactDemoBackEndApplication {
    public static void main(String[] args) {
        SpringApplication.run(ReactDemoBackEndApplication.class, args);
    }

    @PostMapping("/login")
    //CORS allow all
    @CrossOrigin(origins = "*")
    public User login(@RequestBody User user) {
        System.out.println("用户登录");
        System.out.println("username:" + user.getUsername());
        System.out.println("password:" + user.getPassword());
        System.out.println("remember:" + user.getRemember());

        return user;
    }

}
