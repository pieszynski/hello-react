'use client';

import { useState } from "react";

function Przycisk({ gcount, gonClick }: { gcount: number, gonClick: () => void}) {
  const [count, setCount] = useState<number>(0);

  function clicky() {
    // console.log('Przyciski pacnięty');
    setCount(count + 1);
    gonClick();
  }

  return (
    <button
      className="przyciski"
      onClick={clicky}
    >Przyciśnięty {count} razy, w sumie {gcount}</button>
  );
}

function Autor() {
  const user = {
    class: 'osoba',
    name: 'Grzyb',
    isAdmin: true
  }
  return (
    <>
      <span className={user.class} title={'Osoba publikująca: ' + user.name}>
        {user.name}
        {user.isAdmin && <>[Admin]</>}
      </span>      
    </>
  );
}

function ShowColors() {
  const colors = [
    'red',
    'green'
  ]
  const view = colors.map(m =>
    <li
      key={m}
      style={{ color: m }}
    >
      {m}
    </li>
  );
  return (
    <>
      <h2>Lista kolorów</h2>
      <ul>{view}</ul>
    </>
  )
}

export default function Domowiec() {
  const [count, setCount] = useState(0);

  function clicky() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Akapit 1</h1>
      <p>
        To jest paragraf z przyciskiem: <Przycisk gcount={count} gonClick={clicky} />
      </p>
      <p>
        Inny paragraf: <Przycisk gcount={count} gonClick={clicky} />
      </p>
      <div>
        <Autor />
      </div>
      <ShowColors />
    </div>
  );
}