create schema realestatebooking;
create table realestatebooking.accounts(
	id serial8 PRIMARY KEY,
	username varchar[],
	password varchar[],
	"user" varchar[]
	);
create table realestatebooking.renter(email_ID varchar[] PRIMARY KEY, name varchar[], move_in_date date,preferred_location varchar[], budget integer,contact varchar[] );
create table realestatebooking.Address(email_ID varchar[] PRIMARY KEY,Building_number varchar[], Street varchar[], City varchar[], State varchar[], ZipCode varchar[]); 
create table realestatebooking.agent(email_ID varchar[] PRIMARY KEY, name varchar[], job_title varchar[], contact varchar[]);

create table realestatebooking.booking(booking_id varchar[] PRIMARY KEY, email_id varchar[],property_id varchar[], credit_card_no integer); 
create table realestatebooking.credit_card(credit_card_no integer PRIMARY KEY, expiry_date varchar[],email_id varchar[]); 
create table realestatebooking.property(property_id varchar[] PRIMARY KEY, type varchar[], location varchar[], description varchar[], city varchar[], state varchar[]);
create table realestatebooking.reward_program(email_id varchar[] PRIMARY KEY, reward_point integer, rental_price numeric(10,2), booking_id varchar[]);
create table realestatebooking.additional_property_info(property_id varchar[] REFERENCES realestatebooking.property(property_id), neighborhood varchar[], crime_rates numeric(5,2), nearby_schools varchar[]);

create table realestatebooking.houses(property_id varchar[] REFERENCES realestatebooking.property(property_id),square_footage numeric(10,2), no_of_rooms integer);
create table realestatebooking.commercial_building(property_id varchar[] REFERENCES realestatebooking.property(property_id), square_footage numeric(10,2), type_of_business varchar[]);
create table realestatebooking.apartment(property_id varchar[] REFERENCES realestatebooking.property(property_id), square_footage numeric(10,2), no_of_rooms integer, building_type varchar[]); create table realestatebooking.neighborhood(property_id varchar[] REFERENCES realestatebooking.property(property_id), vacation_homes varchar[],land varchar[]);

create table realestatebooking.property_info(property_id varchar[] REFERENCES realestatebooking.property(property_id), address varchar[], price numeric(10,2),availability boolean);

