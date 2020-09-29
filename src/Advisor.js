import React,{ useState, useEffect } from 'react';
import Testimonial from './Testimonial';
import axios from 'axios';

const Advisor = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then((resp) => {
                setTeam(resp.data.data)
            })
    },[])
    return(
        <>
        <div className="team">
                <div className="container">
                    <div className="section-header">
                        <p>Meet Our Advisors</p>
                        <h2>Our Professional Consulting Team</h2>
                    </div>
                    <div className="row">
                        {
                            team.map((item) => {
                                return (
                                    <div className="col-lg-4 col-md-6" key={item.id}>
                                        <div className="team-item">
                                            <div className="team-img">
                                                <img className="w-100" src={item.avatar} alt="Team Image" />
                                            </div>
                                            <div className="team-text">
                                                <h5>{item.first_name} {item.last_name}</h5>
                                                <p>{item.email}</p>
                                                <div className="team-social">
                                                    <a href=""><i className="fab fa-twitter"></i></a>
                                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                                    <a href=""><i className="fab fa-instagram"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }


 
                    </div>
                </div>
                <Testimonial />
            </div>
        </>
    )
}


export default Advisor;