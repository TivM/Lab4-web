package com.example.lab4.DataService;


import com.example.lab4.Entities.Role;
import com.example.lab4.Entities.Shot;
import com.example.lab4.Entities.User;
import com.example.lab4.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import  org.springframework.security.core.userdetails.User.UserBuilder;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

@Service
@Transactional
public class UserService implements UserDetailsService {
    private UserRepository userRepository;
    @Autowired
    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public boolean add(User user){
        if(userRepository.findByUsername(user.getUsername())!=null){
            return false;
        }
        userRepository.save(user);
        return true;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepository.findByUsername(username);
    }

    public List<String> getAllUsernames(){
        List<String> usernames = new LinkedList<>();
        userRepository.findAll().stream().forEach(user -> usernames.add(user.getUsername()));
        return usernames;
    }
}
