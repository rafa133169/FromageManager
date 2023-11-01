import React from 'react';

function Footer() {
  return (
    <footer className="bg-purple-600 text-white absolute bottom-0 w-full p-4">
      <div className="container mx-auto">
        <div className="text-left">
          <p className="mb-4">
            <span>&copy; CONTACTOS</span>
            <ul className="flex flex-col space-y-2">
              <li>
                <a href="#">+55 998 234 5678</a>
              </li>
              <li>
                <a href="#">+55 998 234 5678</a>
              </li>
              <li>
                <a href="#">+55 998 234 5678</a>
              </li>
            </ul>
          </p>
          <div className="flex">
            <p className="text-yellow-400">&copy; Copyright 2023</p>
            <p className="ml-4 text-yellow-400">FromageManager S.A. de C.V. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
