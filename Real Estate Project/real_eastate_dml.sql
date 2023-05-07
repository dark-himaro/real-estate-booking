INSERT INTO realestatebooking.accounts (username, password, "user") VALUES (ARRAY['Chris A', 'AChris'], ARRAY['p@ssword', 'p@ssword1'], ARRAY['admin', 'customer']), (ARRAY['Sana S', 'SSana'], ARRAY['S1234', 'S1234'], ARRAY['customer', 'customer']), (ARRAY['Sreeved T', 'TSreeved'], ARRAY['abc123', 'abc123'], ARRAY['agent', 'agent']);

INSERT INTO realestatebooking.renter(email_ID, name, move_in_date, preferred_location, budget, contact)VALUES (ARRAY['Chris@gmail.com'], '{John Doe}', '2023-06-01', '{New York}', 2000, ARRAY['123-456-7890']), (ARRAY['SanaS@gmail.com'], '{Sana S}', '2023-06-01', '{Chicago}', 2000, ARRAY['123-456-7890']), (ARRAY['SrevedT@gmail.com'], '{Sreeved T}', '2023-06-01', '{New York}', 2000, ARRAY['123-456-7890']);


INSERT INTO realestatebooking.Address (email_ID, Building_number, Street, City, State, ZipCode) VALUES (ARRAY['Chris.C@gmail.com'], '{1234}', '{Main St}', '{Chicago}', '{CA}', '{12345}'), (ARRAY['Sana.P@gmail.com'], '{5678}', '{Elm St}', '{Cali}', '{NY}', '{54321}'), (ARRAY['Sreeved.P@yahoocom'], '{91011}', '{Oak St}', '{Austin}', '{TX}', '{67890}');



INSERT INTO realestatebooking.Address (email_ID, Building_number, Street, City, State, ZipCode) VALUES ('{"Chris.B@gmail.com"}', '{1234}', '{"Main St"}', '{"Chicago"}', '{"CA"}', '{"12345"}'), ('{"Sana.Q@gmail.com"}', '{"5678"}', '{"Elm St"}', '{"Cali"}', '{"NY"}', '{"54321"}'), ('{"Sreeved.Q@yahoo.com"}', '{"91011"}', '{"Oak St"}', '{"Austin"}', '{"TX"}', '{67890}');

INSERT INTO realestatebooking.Address (email_ID, Building_number, Street, City, State, ZipCode) VALUES (ARRAY['Chris.A@gmail.com'], '{1234}', '{Main St}', '{Chicago}', '{CA}', '{12345}'), (ARRAY['Sana.R@gmail.com'], '{5678}', '{Elm St}', '{Cali}', '{NY}', '{54321}'), (ARRAY['Sreeved.T@yahoocom'], '{91011}', '{Oak St}', '{Austin}', '{TX}', '{67890}');



INSERT INTO realestatebooking.agent (email_ID, name, job_title, contact) VALUES('{"Chris.A@gmail.com"}', '{"Chris Anthony"}', '{"Real Estate Agent"}','{"123-456-7890","chris.anthony@gmail.com"}'),('{"Sana.S@gmail.com"}', '{"Sana Sidra"}', '{"Property Manager"}','{"234-567-8901", "Sana.S@gmail.com"}'),('{"Sreeved.T@yahoo.com"}', '{"T Sreeved"}', '{"Leasing Consultant"}', '{"345-678-9012", "Sreeved.T@yahoo.com"}');



INSERT INTO realestatebooking.booking (booking_id, email_id, property_id, credit_card_no) VALUES ('{"book0001"}', '{"Sana.S@gmail.com"}', '{"prop001"}', 123456789), ('{"book0002"}', '{"ChrisA@gmail.com"}', '{"prop002"}', 987654321), ('{"book0003"}', '{"SreevedT@yahoo.com"}', '{"prop003"}', 456789123);


INSERT INTO realestatebooking.credit_card (credit_card_no, expiry_date, email_id) VALUES  ('123456789', '{"2025-12-31"}', '{"Sana.S@gmail.com"}'), ('987654321', '{"2024-06-30"}', '{"ChrisA@gmail.com"}'), ('456789123', '{"2023-09-15"}', '{"SreevedT@yahoo.com"}');


INSERT INTO realestatebooking.property (property_id, type, location, description, city, state) VALUES (ARRAY['prop1'], '{"Apartment"}', '{"Downtown"}', '{"Luxury apartment in the heart of the city"}', '{"Chicago"}', '{"IL"}'), (ARRAY['prop2'], '{"House"}', '{"Suburb"}', '{"Spacious 4 bedroom house with a backyard"}', '{"Dallas"}', '{"TX"}'), (ARRAY['prop3'], '{"Condo"}', '{"Beachfront"}', '{"Beautiful ocean view condo with balcony"}', '{"Miami"}', '{"FL"}');

INSERT INTO realestatebooking.reward_program (email_id, reward_point, rental_price, booking_id) VALUES (ARRAY['Chris.A@gmail.com'], 100, 1200.00, ARRAY['book1']), (ARRAY['Sana.S@gmail.com'], 50, 800.00, ARRAY['book2']), (ARRAY['Sreeved.T@yahoo.com'], 200, 1500.00, ARRAY['book3']);

INSERT INTO realestatebooking.additional_property_info (property_id, neighborhood, crime_rates, nearby_schools) VALUES (ARRAY['prop1'], '{"Downtown"}', 3.45, ARRAY['School A', 'School B']), (ARRAY['prop2'], '{"Suburb"}', 1.23, ARRAY['School C', 'School D', 'School E']), (ARRAY['prop3'], '{"City Center"}', 4.56, ARRAY['School F']);

INSERT INTO realestatebooking.houses (property_id, square_footage, no_of_rooms)VALUES (ARRAY['prop1'], 1200.50, 3), (ARRAY['prop2'], 1500.00, 4), (ARRAY['prop3'], 1000.25, 2);

INSERT INTO realestatebooking.commercial_building (property_id, square_footage, type_of_business) VALUES (ARRAY['prop1'], 2000.00, '{"Retail Store"}'), (ARRAY['prop2'], 1500.25, '{"Restaurant"}'), (ARRAY['prop3'], 3000.50, '{"Office Space"}');


INSERT INTO realestatebooking.apartment (property_id, square_footage, no_of_rooms, building_type) VALUES (ARRAY['prop1'], 1000.00, 2, '{"High-rise"}'),(ARRAY['prop2'], 1200.50, 3, '{"Mid-rise"}'), (ARRAY['prop3'], 800.25, 1, '{"Low-rise"}');

INSERT INTO realestatebooking.neighborhood (property_id, vacation_homes, land) VALUES ('{"prop1"}', '{"Yes"}', '{red soil}'), ('{"prop2"}', '{"No"}', '{black soil}'), ('{"prop3"}', '{"Yes"}', '{black soil}');

INSERT INTO realestatebooking.property_info(property_id, address, price, availability) VALUES (ARRAY['prop1'], '{"1234 Main St, Chicago, CA 12345"}', 200000.00, true), (ARRAY['prop2'], '{"5678 Elm St, Cali, NY 54321"}', 350000.00, false), (ARRAY['prop3'], '{"91011 Oak St, Austin, TX 67890"}', 500000.00, true);

select * from realestatebooking.accounts;
select * from realestatebooking.renter;
select * from realestatebooking.Address;
select * from realestatebooking.agent;
select * from realestatebooking.booking;
select * from realestatebooking.credit_card;
select * from realestatebooking.property;
select * from realestatebooking.reward_program;

select * from realestatebooking.houses;
select * from realestatebooking.commercial_building;
select * from realestatebooking.apartment;
select * from realestatebooking.neighborhood;
select * from realestatebooking.property_info;
select * from realestatebooking.additional_property_info;
