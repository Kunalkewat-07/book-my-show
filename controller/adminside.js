const { QueryTypes } = require("sequelize");
const sequelize = require("../config/db");
const {
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
} = require("../models/dbhelper");


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
        if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"})
        const data  = await sequelize.query(`select date_format(booking_time,'%M-%Y') as monthly ,sum(total_amount) earning
  from Bookings 
  where status = 'booked'
  and isDeleted =0
  group by monthly;
`,{type: QueryTypes.SELECT});
if(data.length==0){
    return res.status(404).json({message:'not found'})
} 
return res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


exports.getAlmostFullShows = async(req, res)=>{
    try {
       if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data  = await sequelize.query(`select movie_name ,theater_name,start_time,booked as booked_seats , total_seats,percentage 
 from (select mv.name as movie_name,
 t.name as theater_name,
 m2.start_time,
 bookingInfo.MT_id,
 bookingInfo.booked,
 s.total_seats,
 (bookingInfo.booked/s.total_seats)*90 as percentage
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
where percentage > 90`,{type: QueryTypes.SELECT})
console.log(data[0]);
if(data.length==0){
    return res.status(404).json({message:'not found'})
}
return res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}



exports.getFrequentUsers = async (req, res)=> {
    try {
         if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data = await sequelize.query(`select u.name,u.email,u.dateOfBirth, count(u.user_id) as total_tickets 
from Bookings b join Users u on u.user_id = b.user_id 
 where b.status  = 'booked' and u.isDeleted = 0  and b.isDeleted  = 0
group by b.user_id
having total_tickets > 3;`,{type: QueryTypes.SELECT})
if(data.length==0){
    return res.status(404).json({message:'not found'})
} 
return res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}


exports.getTheaterRevenue = async(req, res)=>{
    try {
        if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data = await sequelize.query(`select t.name ,sum(total_amount) as revenue
from Bookings b join MovieTheaters mt on mt.MT_id = b.MT_id join Theaters t on mt.theater_id= t.theater_id
 where b.status = 'booked' and b.isDeleted = 0 and mt.isdeleted =0
 group by mt.theater_id;
 `,{type: QueryTypes.SELECT})
if(data.length==0){
    return res.status(404).json({message:'not found'})
} 
return res.status(200).json(data)
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
        if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data = await sequelize.query(`select name,average_ratings,total_ratings from Movies m join(select movie_id , 
avg(rating) as average_ratings,count(rating) as  total_ratings
from Feedbacks 
where isDeleted=0 group by movie_id)as info
on info.movie_id = m.movie_id
where total_ratings > 100`,{type: QueryTypes.SELECT})
if(data.length==0){
    return res.status(404).json({message:'not found'})
} 
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
        if(req.user.role!='admin')
            return res.status(403).json({message: "no permission"});
        const data = await sequelize.query(`select u.name,u.email,u.phone,cen_bok.total_user as total_cencal_tickets from Users u join (select b.user_id as users,count(user_id) as total_user
from Bookings b 
where status = 'cancelled' 
and isDeleted=0 
group by user_id having total_user > 2) as cen_bok
on cen_bok.users = u.user_id;`,{type: QueryTypes.SELECT})
if(data.length==0){
    return res.status(404).json({message:'not found'})
} 
return res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.getCityWiseRevenue = async(req, res)=>{
try {
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
order by  revenue desc;`,{type: QueryTypes.SELECT})
if(data.length==0){
    return res.status(404).json({message:'not found'})
} 
return res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}