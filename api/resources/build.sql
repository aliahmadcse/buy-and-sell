create database `buy-and-sell`;

use `buy-and-sell`;

create table `listings`
(
    id          varchar(36)    not null,
    name        varchar(45)    not null,
    description varchar(1000)  not null,
    price       decimal(10, 2) not null,
    user_id     nvarchar(36)   not null,
    view        int            not null,
    Primary key (id)
);

insert into listings (id, name, description, price, user_id, view)
values ('123', 'Guiter', 'My old Guiter, plays very well', 200.00, '12345', 0),
       ('124', 'Old Boat', 'Old, but enough to take you on a route', 700.00, '12345', 0),
       ('125', 'Computer', 'Flickers a bit', 70.00, '9999', 0),
       ('126', 'Basketball', 'Good Condition, free delivery', 30.00, '44444', 0);
