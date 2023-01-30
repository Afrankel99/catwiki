import React from "react"
import Section from "../../components/Section"
import NavBar from "../Navbar"
import Pictures from "../Pictures"
import Search from "../Search"

class App extends React.Component {

  render() {

    return (
      <div>
        <NavBar />
        <Search />
        <Section title="Most Searched" class="TopTenSection" />
        <Pictures />
      </div>
    )
  }
}

export default App
