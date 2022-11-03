import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Home () => {

  return (
    <div>
      <div className="flex-row justify-space-between mb-3">
        <Card className="col-10 col-md-6 col-sm-3 profile">
          <Card.Img className="poke bg-white" src={userPokemon ? `${userPokemon}` : "placeholder"} />
        </Card>
        <Card className="col-10 col-md-6 col-sm-3 p-3 bg-white mb-5">
          <Card.Body>
            <h2 className="welcome">
              WeLcOmE{" "}
              <span className="user">
                {userData ? `${userData}, ` : "your"}{" "}
              </span>
              To ThE WoRlD Of PoKeMoN DaTiNg!
            </h2>
          </Card.Body>
        </Card>
      </div>
      <div className="matches">
        <Button
          className="btn btn-light w-100 custom-card-btn"
          variant="primary"
          href="../../matches"
        >
          Poke Matches
        </Button>
      </div>
    </div>
  );
};



export default Home;
