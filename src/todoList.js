import React, { Component } from "react";

class List extends Component {
  render() {
    const { liste, onDelete } = this.props;
    return (
      <div>
        <li className="list-group-item">
          {liste.tache}{" "}
          <button onClick={() => onDelete(liste.id)} className="btn btn-danger">
            {" "}
            Supp
          </button>
        </li>
      </div>
    );
  }
}

export default List;


