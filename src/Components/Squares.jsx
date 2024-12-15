import React from "react";


const Squares = (props) => {

        return (
            <div className="sq" onClick={props.onClick}>
              <h2 className="txt">{props.value}</h2>
            </div>
        );
}
export default Squares;