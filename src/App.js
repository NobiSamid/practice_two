import { Component } from "react";
import Unsplash from "./api/Unsplash";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";

export default class App extends Component {
  state = { images: [] };
  onSearchSubmit = async (term) => {
    const res = await Unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "2rem" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <h3>Found: {this.state.images.length} images</h3>
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
