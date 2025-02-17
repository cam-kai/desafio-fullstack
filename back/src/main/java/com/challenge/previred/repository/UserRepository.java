package com.challenge.previred.repository;

import com.challenge.previred.entity.AppUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<AppUser, Long> {
}
