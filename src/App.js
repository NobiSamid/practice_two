import axios from "axios";
import { Component } from "react";
import SearchBar from "./components/SearchBar";

export default class App extends Component {
  onSearchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID Jgtj077FwwTyDIvWeUKor8WO0zbRnwKuA-QdHYUaik0",
        },
      })
      .then((res) => {
        console.log(res.data.results);
      });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "2rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
