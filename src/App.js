import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";

export default class App extends Component {
  pageSize = 15;
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  key="general"
                  pageSize={this.PageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  pageSize={this.PageSize}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  pageSize={this.PageSize}
                  country="in"
                  category="technology"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News
                  key="business/"
                  pageSize={this.PageSize}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pageSize={this.PageSize}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  pageSize={this.PageSize}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  pageSize={this.PageSize}
                  country="in"
                  category="sports"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
