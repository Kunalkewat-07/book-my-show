const { QueryTypes } = require("sequelize");
const sequelize = require("../config/db");
 /* const {
  user: Users,
  city: Cities,
  feedback: Feedbacks,
  booking: Bookings,
  movie: Movies,
  screen: Screens,
  seat: Seats,
  theater: Theaters,
  payment: Payments,
  movieTheater: MovieTheaters,
} = require("../models/dbhelper"); */
 
exports.top_moives_reports= async(req,res)=>{
try {
    if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"})
    const data = await sequelize.query(`select mv.name,count(*) as total_tickets 
from Bookings b  
join MovieTheaters mt 
on b.MT_id = mt.MT_id 
join Movies mv 
on mt.movie_id = mv.movie_id 
where status='booked' and b.isDeleted =0
group by mt.movie_id
order by total_tickets desc limit 5;`,{type: QueryTypes.SELECT});
console.log(data);
if(data.length==0){
    return res.status(404).json({message:'not found'})
} 
res.status(200).json(data)
} catch (error) {
    res.status(500).json(error.message)
}
}

exports.getMonthlyrevenue= async(req ,res)=>{
    try {
         let pageno = parseInt(req.query.pageno) || 1;

  const limit = parseInt(req.query.limit) || 5;

  const offset = (pageno - 1) * limit;

        if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"})
        const data  = await sequelize.query(`select date_format(booking_time,'%M-%Y') as monthly ,sum(total_amount) earning
  from Bookings 
  where status = 'booked'
  and isDeleted =0
  group by monthly 
  order by monthly
  limit ${limit} offset ${offset}
`,{type: QueryTypes.SELECT});
if(data.length==0){
    return res.status(404).json({message:'not found'})
} 
let count  = await sequelize.query(` select count(*) as total_page from(select date_format(booking_time,'%M-%Y') as monthly ,sum(total_amount) earning
  from Bookings 
  where status = 'booked'
  and isDeleted =0
  group by monthly 
  order by monthly) as info
`,{type: QueryTypes.SELECT});
count = count[0].total_page;
const total_pages = Math.ceil(count/limit);
return res.status(200).json({data,currentPage:pageno,total_pages:total_pages})
    } catch (error) {
        res.status(500).json(error.message)
    }
}


exports.getAlmostFullShows = async(req, res)=>{
    try {
         let pageno = parseInt(req.query.pageno) || 1;

  const limit = parseInt(req.query.limit) || 10;

  const offset = (pageno - 1) * limit;
       if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data  = await sequelize.query(`select movie_name ,theater_name,start_time,end_time,booked as booked_seats , total_seats,percentage 
 from (select mv.name as movie_name,
 t.name as theater_name,
 date_format(m2.start_time,'%h:%i:%p')as start_time,Date_format( DATE_ADD(m2.start_time,Interval mv.duration_time minute),'%h:%i:%p') as end_time,
 bookingInfo.MT_id,
 bookingInfo.booked,
 s.total_seats,
 (bookingInfo.booked/s.total_seats)*100 as percentage
 from MovieTheaters m2 
 join (
 select MT_id,count(*) as booked 
 from Bookings b
 where status = 'booked' and isDeleted =0
 group by MT_id 
 )as bookingInfo 
 on bookingInfo.MT_id = m2.MT_id 
 join Screens s on s.screen_id = m2.screen_id
 join Theaters t on m2.theater_id = t.theater_id
 join Movies mv on mv.movie_id = m2.movie_id) as allinfo
where percentage >= 90 order by movie_name limit ${limit} offset ${offset}`,{type: QueryTypes.SELECT})
if(data.length==0){
    return res.status(404).json(data)
}
let count  = await sequelize.query(`select count(*) as total_page from (select movie_name ,theater_name,start_time,booked as booked_seats , total_seats,percentage 
 from (select mv.name as movie_name,
 t.name as theater_name,
  date_format(m2.start_time,'%h:%i:%p')as start_time,Date_format( DATE_ADD(m2.start_time,Interval mv.duration_time minute),'%h:%i:%p') as end_time,
 bookingInfo.MT_id,
 bookingInfo.booked,
 s.total_seats,
 (bookingInfo.booked/s.total_seats)*100 as percentage
 from MovieTheaters m2 
 join (
 select MT_id,count(*) as booked 
 from Bookings b
 where status = 'booked' 
 group by MT_id 
 )as bookingInfo 
 on bookingInfo.MT_id = m2.MT_id 
 join Screens s on s.screen_id = m2.screen_id
 join Theaters t on m2.theater_id = t.theater_id
 join Movies mv on mv.movie_id = m2.movie_id) as allinfo
where percentage >= 90 order by movie_name) as info`,{type: QueryTypes.SELECT})

count = count[0].total_page;
const total_pages = Math.ceil(count/limit);
return res.status(200).json({data,currentPage:pageno,total_pages:total_pages})
    } catch (error) {
        res.status(500).json(error.message)
    }
}



exports.getFrequentUsers = async (req, res)=> {
    try {
                 let pageno = parseInt(req.query.pageno) || 1;

  const limit = parseInt(req.query.limit) || 5;

  const offset = (pageno - 1) * limit;
         if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data = await sequelize.query(`select u.name,u.email,u.dateOfBirth,u.createdAt, count(u.user_id) as total_tickets 
from Bookings b join Users u on u.user_id = b.user_id 
 where b.status  = 'booked' and u.isDeleted = 0  and b.isDeleted  = 0
group by b.user_id
having total_tickets > 3 
order by u.createdAt desc
LIMIT  ${limit} OFFSET ${offset}`,{type: QueryTypes.SELECT})

if(data.length==0){
    return res.status(404).json(data)
} 
let count  = await sequelize.query(`select count(*) as total_page from (select u.name,u.email,u.dateOfBirth,u.createdAt, count(u.user_id) as total_tickets 
from Bookings b join Users u on u.user_id = b.user_id 
 where b.status  = 'booked' and u.isDeleted = 0  and b.isDeleted  = 0
group by b.user_id
having total_tickets > 3
order by u.createdAt
 ) as info;`,{type: QueryTypes.SELECT})

 count = count[0].total_page
const total_pages = Math.ceil(count/limit);
console.log(total_pages,count);
return res.status(200).json({data,currentPage:pageno,total_pages:total_pages})
    } catch (error) {
        res.status(500).json(error.message)
    }
}


exports.getTheaterRevenue = async(req, res)=>{
    try {
         let pageno = parseInt(req.query.pageno) || 1;

  const limit = parseInt(req.query.limit) || 5;

  const offset = (pageno - 1) * limit;
        if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data = await sequelize.query(`select t.name ,sum(total_amount) as revenue,t.createdAt
from Bookings b join MovieTheaters mt on mt.MT_id = b.MT_id join Theaters t on mt.theater_id= t.theater_id
 where b.status = 'booked' and b.isDeleted = 0 and mt.isdeleted =0
 group by mt.theater_id
 order by t.createdAt desc
 limit ${limit} offset ${offset}
 `,{type: QueryTypes.SELECT})
if(data.length==0){
    return res.status(404).json(data)
} 
let count  = await sequelize.query(`select count(*) as total_page from (select t.name ,sum(total_amount) as revenue,t.createdAt
from Bookings b join MovieTheaters mt on mt.MT_id = b.MT_id join Theaters t on mt.theater_id= t.theater_id
 where b.status = 'booked' and b.isDeleted = 0 and mt.isdeleted =0
 group by mt.theater_id
 order by t.createdAt desc) as info
 `,{type: QueryTypes.SELECT})

 count = count[0].total_page
const total_pages = Math.ceil(count/limit);
return res.status(200).json({data,currentPage:pageno,total_pages:total_pages})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.getSeatPreference = async(req, res)=>{
    try {
        if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data = await sequelize.query(` select seat_type from Bookings b
 join Seats s1 on s1.seat_id = b.seat_id
 where  b.status = 'booked'
 and b.isDeleted=0 
 and s1.isDeleted =0
group by seat_type
order by  count(seat_type) desc limit 1;`,{type: QueryTypes.SELECT})
if(data.length==0){
    return res.status(404).json({message:'not found'})
} 
return res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.getTopRatedMovie = async(req, res)=>{
     try {
        let pageno = parseInt(req.query.pageno) || 1;

  const limit = parseInt(req.query.limit) || 5;

  const offset = (pageno - 1) * limit;
        if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data = await sequelize.query(`select name,average_ratings,total_ratings from Movies m join(select movie_id , 
avg(rating) as average_ratings,count(rating) as  total_ratings
from Feedbacks 
where isDeleted=0 group by movie_id)as info
on info.movie_id = m.movie_id
where total_ratings >= 100 and average_ratings>=4 order by average_ratings limit ${limit} offset ${offset}`,{type: QueryTypes.SELECT})
if(data.length==0){
    return res.status(404).json(data)
} 
let count = await sequelize.query(`select count(*) as total_page from (select name,average_ratings,total_ratings from Movies m join(select movie_id , 
avg(rating) as average_ratings,count(rating) as  total_ratings
from Feedbacks 
where isDeleted=0 group by movie_id)as info
on info.movie_id = m.movie_id
where total_ratings >= 100 and average_ratings>=4 order by average_ratings ) as info `,{type: QueryTypes.SELECT});
count = count[0].total_page
const total_pages = Math.ceil(count/limit);
return res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.preBookingHours = async(req, res)=>{
      try {
        if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data = await sequelize.query(`select  hour(booking_time) time from Bookings 
 group by time
 order by count( hour(booking_time)) desc limit 1;`,{type: QueryTypes.SELECT})
if(data.length==0){
    return res.status(404).json({message:'not found'})
} 
return res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.getCancelledUsers = async(req, res)=>{
    try {
        let pageno = parseInt(req.query.pageno) || 1;

  const limit = parseInt(req.query.limit) || 5;

  const offset = (pageno - 1) * limit;

        if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data = await sequelize.query(`select u.name,u.email,u.phone,cen_bok.total_user as total_cencal_tickets from Users u join (select b.user_id as users,count(user_id) as total_user
from Bookings b 
where status = 'cancelled' 
and isDeleted=0 
group by user_id having total_user > 2) as cen_bok
on cen_bok.users = u.user_id limit ${limit} offset ${offset}`,{type: QueryTypes.SELECT})
if(data.length==0){
    return res.status(404).json(data)
} 
let count  = await sequelize.query(`select count(*) as total_page from (select u.name,u.email,u.phone,cen_bok.total_user as total_cencal_tickets from Users u join (select b.user_id as users,count(user_id) as total_user
from Bookings b 
where status = 'cancelled' 
and isDeleted=0 
group by user_id having total_user > 2) as cen_bok
on cen_bok.users = u.user_id) as info`,{type: QueryTypes.SELECT})
count = count[0].total_page
const total_pages = Math.ceil(count/limit);
console.log(total_pages,count);
return res.status(200).json({data,currentPage:pageno,total_pages:total_pages})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.getCityWiseRevenue = async(req, res)=>{
try {
    let pageno = parseInt(req.query.pageno) || 1;

  const limit = parseInt(req.query.limit) || 5;

  const offset = (pageno - 1) * limit;

        if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data = await sequelize.query(`select
c.name as city_name,
c.state,
c.country,
sum(b.total_amount) as revenue
from Bookings b
join MovieTheaters mt 
on mt.MT_id = b.MT_id 
join Theaters t
on mt.theater_id = t.theater_id
join Cities c 
on c.city_id = t.city_id
where b.status = 'booked'
group by c.city_id, c.name, c.state, c.country
order by  revenue desc limit 
${limit} offset ${offset}`,{type: QueryTypes.SELECT})

if(data.length==0){
    return res.status(404).json({message:'not found'})
} 
let count = await sequelize.query(` select count(*) as total_page from ( select
c.name as city_name,
c.state,
c.country,
sum(b.total_amount) as revenue
from Bookings b
join MovieTheaters mt 
on mt.MT_id = b.MT_id 
join Theaters t
on mt.theater_id = t.theater_id
join Cities c 
on c.city_id = t.city_id
where b.status = 'booked'
group by c.city_id, c.name, c.state, c.country
order by  revenue desc) as info
`,{type: QueryTypes.SELECT})
 count = count[0].total_page
const total_pages = Math.ceil(count/limit);
return res.status(200).json({data,currentPage:pageno,total_pages:total_pages})
    } catch (error) {
        res.status(500).json(error.message)
    }
}