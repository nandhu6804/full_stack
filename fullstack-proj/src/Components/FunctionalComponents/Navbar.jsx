import "../../assets/css/Navbar.css"
var Navbar = () => {
    var styling = {
        color: "blue",
        fontSize: "30px",
        textDecoration: "underlin"
    }
    return (
        <header>
            <h1 style={styling}>This is Navbar component</h1>
            <h2 id="idSEg">Testing Styling</h2>
        </header>
    )
}
export default Navbar;