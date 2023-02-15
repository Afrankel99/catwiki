import NavBar from "../Navbar"
import Search from "../Search"
import Before from "../Before"

function App() {
    return (
        <div>
            <NavBar isFooter={false} />
            <Search />
            <Before />
            <NavBar isFooter={true} />
        </div>
    )
}

export default App
