//package com.UATLocalConnect.UATLocalConnect.repository;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//import com.UATLocalConnect.UATLocalConnect.model.Event;
//
//import java.util.List;
//
//@Repository
//public interface EventRepository extends JpaRepository<Event, Long> {
//    // Here you can define custom database queries using Spring Data JPA
//
//    // Example: Find events by title
//    List<Event> findByTitle(String title);
//
//    // You can also use JPQL to define more complex queries
//    // @Query("SELECT e FROM Event e WHERE e.description LIKE %:keyword%")
//    // List<Event> searchByKeyword(@Param("keyword") String keyword);
//}
