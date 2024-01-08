import React from 'react'
import "./portfolio.css";
import cart from '../../assets/cart.png';
import chat from '../../assets/chat.png';
import codehelp from '../../assets/codehelp.jpeg';
import food from '../../assets/food.jpeg';
import payment from '../../assets/paymentGateway.png';
import ticket from '../../assets/ticketBooking.png';
import vote from '../../assets/voteEasy.png';





const Portfolio = () => {
    const portfolio = [
        {
            img: vote,
            gitlink: 'https://github.com/jradityamishra/practice'
        },
        {
            img: food,
            gitlink: 'https://github.com/pratham4434/SavourySearches'
        },
        {
            img: codehelp,
            gitlink: 'https://github.com/rohitranjan-2702/codehelp_diversion2k23'

        },
        {
            img: ticket,
            gitlink: 'https://github.com/jradityamishra/React.js-Ticket-booking-application'
        },
        {
            img: cart,
            gitlink: 'https://github.com/jradityamishra/UI-e-cart'
        },
        {
            img: chat,
            gitlink: 'https://github.com/jradityamishra/p2p-chat-application'
        },
        {
            img: payment,
            gitlink: 'https://github.com/jradityamishra/Payment-Rozerpay-React'
        }

    ]
    const openGitHubLink = (gitlink) => {
        window.open(gitlink, '_blank');
    };
    return (
        <>
            <section class="portfolio section" id="portfolio">
                <div class="conatiner">
                    <div class="row">
                        <div class="section-title padd-15">
                            <h2>portfolio</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="portfolio-heading padd-15">
                            <h2>My last projects :</h2>
                        </div>
                    </div>
                    <div class="row">
                        {/* <!--====PORTFOLIO ITEM STARTED=====--> */}
                        {portfolio.map((e, key) => {
                            return (
                                <div class="portfolio-item padd-15">
                                    <div class="portfolio-item-inner shadow-dark">
                                        <div class="portfolio-img" onClick={() => openGitHubLink(e.gitlink)}>
                                            <img src={e.img} alt={`Project ${key + 1}`} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                        {/* {/* <!--====PORTFOLIO ITEM ENDED=====--> */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio