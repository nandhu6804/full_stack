//Component1 is useContext.jsx
import Component3 from "./Component3";

var Component2 = () => {
    return (
        <section>
            <h2>In Component 2</h2>
            <Component3 />
        </section>
    );
};

export default Component2;