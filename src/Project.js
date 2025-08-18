
const Project = ({ colors }) => {
    return (
        <>
            <section className={colors ? 'navbar-light companies-section' : 'navbar-dark companies-section'}>
                <div class="container">
                    <div class="company-grid">

                        <a href="https://mutualfund.adityabirlacapital.com/">
                            <div class="company-item">

                                <img src="../aditya.png" alt="Aditya Birla" />
                                
                            </div>
                        </a>
                        <a href="https://www.mahindramanulife.com/">
                            <div class="company-item">
                                <img src="../mahendra.png" alt="Mahendra" />
                                
                            </div>
                        </a>

                        <a href="https://www.bajajfinserv.in/">
                            <div class="company-item">
                                <img src="../bajaj.jpg" alt="Bajaj Finserve" />

                            </div>
                        </a>
                       <a href="https://jmfl.com">
                         <div class="company-item">
                            <img src="../jm.png" alt="JM Finance" />
                            
                        </div>
                       </a>


                        <a href="https://anandrathi.com/">
                            <div class="company-item">
                                <img src="../anand.png" alt="anand rathi" />
                               
                            </div>
                        </a>

                        <a href="https://www.moneysukh.com/">
                            <div class="company-item">
                                <img src="../money.png" alt="anand rathi" />
                            
                            </div>
                        </a>
                    </div>
                </div>
            </section>


        </>
    )
}

export default Project