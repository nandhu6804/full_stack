import "../../assets/css/Home.css"

var Navbar = () => {
    var styling = {
        color: "blue",
        fontSize: "30px",
        textDecoration: "underline"
    }
    return (
        <header>
            <h1 style={styling}>KONGU VELLALAR INSTITUTE OF TRUST AND TECHNOLOGY</h1>
            <h2 id="idSEg">VISION</h2>
            <div className="alert alert-danger">
            <p className="box-model">To be a centre of excellence for development and dissemination of knowledge in Applied science, Technology, Engineering and Management for the Nation and beyond.</p></div>
            <h2 id="idSEg">MISSION</h2>
            <div className="alert alert-warning">
            <p className="box-model">We are committed to value based Education, Research and Consultancy in Engineering and Management and to bring out technically competent, ethically strong and quality professionals to keep our Nation ahead in the competitive knowledge intensive world.</p></div>
            <h2 id="idSEg">QUALITY STANDARDS</h2>
            <div className="alert alert-info">
            <p className="box-model1">
                    1. Provide value based quality education for developing the students as a competent and responsible citizen.<br/>
                    2. Contribute to the nation and beyond through the state of the art Technology.<br/>
                    3. Continuously improve our services.<br/>
            </p></div>
        </header>
    );
};
export default Navbar;