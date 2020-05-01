import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createCard(e) {
  return (
    <Entry key={e.key} emoji={e.emoji} name={e.name} meaning={e.meaning} />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {/* <Entry emoji={emojipedia[0].emoji} name={emojipedia[0].name} meaning={emojipedia[0].meaning}/> */}
        {/* <Entry emoji={emojipedia[0].emoji} name={emojipedia[0].name} meaning={emojipedia[0].meaning}/> */}
        {/* <Entry emoji={emojipedia[0].emoji} name={emojipedia[0].name} meaning={emojipedia[0].meaning}/> */}

        {emojipedia.map(createCard)}
      </dl>
    </div>
  );
}

export default App;
