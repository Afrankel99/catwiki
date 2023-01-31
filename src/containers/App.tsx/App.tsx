import React from "react"
import Section from "../../components/Section"
import NavBar from "../Navbar"
import Pictures from "../Pictures"
import Search from "../Search"
import TopTen from "../TopTen"

class App extends React.Component {

  render() {

    return (
      <div>
        <NavBar />
        <Search />
        <TopTen />
        <Pictures />
      </div>
    )
  }
}

export default App
