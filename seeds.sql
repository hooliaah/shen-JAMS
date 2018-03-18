INSERT INTO Users (first_name, last_name, password, phone, email_address, address, interest_coffee, interest_bar, interest_restaurant, interest_movie, interest_hike, interest_park, interest_gym, interest_club, interest_churro, createdAt, updatedAt) VALUES ('julie', 'groth', 'password', '9876543211', 'email@gmail.com', '3710 los feliz blvd los angeles, ca 90027', true, true, true, true, true, false, false, false, true, '2016-08-09 04:05:02', '2016-08-09 04:05:02');
INSERT INTO Users (first_name, last_name, password, phone, email_address, address, interest_coffee, interest_bar, interest_restaurant, interest_movie, interest_hike, interest_park, interest_gym, interest_club, interest_churro, createdAt, updatedAt) VALUES ('alvin', 'go', 'password1', '1234567891', 'email1@gmail.com', '1635 colby ave los angeles, ca 90025', false, false, false, true, true, true, true, true, true, '2018-01-01 10:10:10', '2018-01-01 10:10:10');
INSERT INTO Users (first_name, last_name, password, phone, email_address, address, interest_coffee, interest_bar, interest_restaurant, interest_movie, interest_hike, interest_park, interest_gym, interest_club, interest_churro, createdAt, updatedAt) VALUES ('scott', 'reynolds', 'password2', '1234567899', 'email2@gmail.com', '930 n doheny drive west hollywood, ca 90069', false, true, false, true, false, true, true, true, true, '2018-01-01 10:10:11', '2018-01-01 10:10:11');
INSERT INTO Users (first_name, last_name, password, phone, email_address, address, interest_coffee, interest_bar, interest_restaurant, interest_movie, interest_hike, interest_park, interest_gym, interest_club, interest_churro, createdAt, updatedAt) VALUES ('mckenna', 'beardsley', 'password3', '9234567899', 'email3@gmail.com', '4858 matilija ave sherman oaks, ca 91423', false, true, true, true, false, false, true, true, true, '2018-01-01 10:10:12', '2018-01-01 10:10:12');

INSERT INTO Events (event_name, event_time, event_location, createdAt, updatedAt) VALUES ('dinner', '7:00', 'los angeles','2018-01-01 10:10:13', '2018-01-01 10:10:13');
INSERT INTO Events (event_name, event_time, event_location, createdAt, updatedAt) VALUES ('coffee', '9:00', 'santa monica','2018-01-01 10:10:14', '2018-01-01 10:10:14');
INSERT INTO Events (event_name, event_time, event_location, createdAt, updatedAt) VALUES ('gym', '12:00', 'westwood','2018-01-01 10:10:15', '2018-01-01 10:10:15');

INSERT INTO user_events (createdAt, updatedAt, UserID, EventID) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 1, 1);
INSERT INTO user_events (createdAt, updatedAt, UserID, EventID) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 2, 1);
INSERT INTO user_events (createdAt, updatedAt, UserID, EventID) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 3, 1);
INSERT INTO user_events (createdAt, updatedAt, UserID, EventID) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 4, 1);
INSERT INTO user_events (createdAt, updatedAt, UserID, EventID) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 1, 2);
INSERT INTO user_events (createdAt, updatedAt, UserID, EventID) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 2, 2);
INSERT INTO user_events (createdAt, updatedAt, UserID, EventID) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 3, 3);
INSERT INTO user_events (createdAt, updatedAt, UserID, EventID) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 4, 3);

INSERT INTO user_friends (createdAt, updatedAt, UserID, friendId) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 1, 2);
INSERT INTO user_friends (createdAt, updatedAt, UserID, friendId) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 1, 3);
INSERT INTO user_friends (createdAt, updatedAt, UserID, friendId) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 1, 4);
INSERT INTO user_friends (createdAt, updatedAt, UserID, friendId) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 2, 1);
INSERT INTO user_friends (createdAt, updatedAt, UserID, friendId) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 2, 3);
INSERT INTO user_friends (createdAt, updatedAt, UserID, friendId) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 2, 4);
INSERT INTO user_friends (createdAt, updatedAt, UserID, friendId) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 3, 1);
INSERT INTO user_friends (createdAt, updatedAt, UserID, friendId) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 3, 2);
INSERT INTO user_friends (createdAt, updatedAt, UserID, friendId) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 3, 4);
INSERT INTO user_friends (createdAt, updatedAt, UserID, friendId) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 4, 1);
INSERT INTO user_friends (createdAt, updatedAt, UserID, friendId) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 4, 2);
INSERT INTO user_friends (createdAt, updatedAt, UserID, friendId) VALUES ('2018-01-01 10:10:19', '2018-01-01 10:10:20', 4, 3);