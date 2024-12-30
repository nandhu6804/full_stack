import "../../assets/css/Home.css"
var Navbar = () => {
    var styling = {
        color: "blue",
        fontSize: "30px",
        textDecoration: "underline"
    }
    return (
        <header>
            <h1 style={styling}>This is Home Page</h1>
            <h2 id="idSEg">Testing Styling</h2>
            <p className="box-model">Hello</p>
        </header>
    )
}
export default Navbar;