import React, { useState } from 'react';
import './App.css';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');

  const openModal = (src) => {
    setModalImageSrc(src);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImageSrc('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="/img/olympics-logo.png"
          alt="Olympics 2024 Logo"
          className="olympics-logo"
          onClick={() => openModal('/img/olympics-logo.png')}
        />
        <h1>Juegos Olímpicos 2024</h1>
      </header>

      <nav className="nav-menu">
        <a href="#home">Inicio</a>
        <a href="#about">Sobre los Juegos</a>
        <a href="#schedule">Calendario</a>
        <a href="#venues">Sedes</a>
        <a href="#athletes">Atletas Destacados</a>
        <a href="#medals">Medallero</a>
        <a href="#contact">Contacto</a>
      </nav>

      <section id="home" className="intro">
        <h2>Bienvenidos a los Juegos Olímpicos 2024</h2>
        <p>
          Los Juegos Olímpicos de 2024 se celebrarán en París del 26 de julio al 11 de agosto. Será la tercera vez que la ciudad sea sede de los Juegos.
          La mayoría de los eventos se llevarán a cabo en instalaciones existentes y temporales, con un enfoque en sostenibilidad. Se mantendrán deportes
          tradicionales y se incluirán nuevos como el surf y el skateboarding. La ceremonia de apertura y cierre se realizará en el Stade de France y en el centro de París.
        </p>
        <img
          src="/img/paris2024.jpg"
          alt="París 2024"
          className="intro-image"
          onClick={() => openModal('/img/paris2024.jpg')}
        />
      </section>

      <section id="about" className="about">
        <h2>Sobre los Juegos Olímpicos 2024</h2>
        <p>
          Los Juegos Olímpicos de 2024 se llevarán a cabo en París, Francia, del 26 de julio al 11 de agosto. Será la tercera vez que París sea sede de los Juegos Olímpicos,
          tras 1900 y 1924. Los eventos se desarrollarán en varias ubicaciones de la ciudad y alrededores, incluyendo el Stade de France y el centro de París. Se mantendrán
          deportes tradicionales y se agregarán nuevos como el surf y el skateboarding. París 2024 se enfocará en la sostenibilidad y la inclusión, con un alto porcentaje
          de sedes ya existentes o temporales.
        </p>
        <img
          src="/img/paris_landmarks.jpg"
          alt="Puntos emblemáticos de París"
          className="about-image"
          onClick={() => openModal('/img/paris_landmarks.jpg')}
        />
      </section>

      <section id="schedule" className="schedule">
        <h2>Calendario de Competencias</h2>
        <p>
          El calendario de los Juegos Olímpicos 2024 se dividirá en varias fases:
          <ul>

            El calendario específico de competiciones para los Juegos Olímpicos de 2024 en París aún no está completamente publicado. Sin embargo, te puedo dar una idea general de cómo se organizan las competiciones durante los Juegos Olímpicos:

            Ceremonia de Apertura: 26 de julio de 2024. La ceremonia de apertura dará inicio a los Juegos con una gran celebración en el Stade de France y eventos en el centro de la ciudad.

            Competencias: Las competiciones deportivas suelen comenzar al día siguiente de la ceremonia de apertura. Los eventos más destacados suelen ser:

            Atletismo: Del 1 al 11 de agosto.

            Natación: Del 27 de julio al 4 de agosto.

            Gimnasia: Del 27 de julio al 3 de agosto.

            Baloncesto: Del 27 de julio al 10 de agosto.

            Fútbol: Del 27 de julio al 10 de agosto.

            Otros deportes tienen sus propias fechas específicas dentro del período de los Juegos.

            Ceremonia de Clausura: 11 de agosto de 2024. La ceremonia de clausura marcará el final de los Juegos con una celebración en el centro de la ciudad.

            El calendario detallado por deporte, incluyendo las fechas exactas de cada competición y la programación diaria, se publicará más cerca del evento. Puedes consultar el sitio web oficial de los Juegos Olímpicos de 2024 o las federaciones internacionales de los deportes para obtener información actualizada y específica.
          </ul>
        </p>
        <img
          src="/img/olympic_schedule.jpg"
          alt="Calendario de competencias"
          className="schedule-image"
          onClick={() => openModal('/img/olympic_schedule.jpg')}
        />
      </section>

      <section id="venues" className="venues">
        <h2>Sedes de los Juegos</h2>
        <p>
          Los Juegos Olímpicos de 2024 en París contarán con una variedad de sedes, combinando instalaciones emblemáticas, lugares históricos y nuevas construcciones. Aquí tienes un resumen de las principales sedes:

          Sedes Principales en París y alrededores:

          Stade de France (Saint-Denis):

          Eventos: Ceremonia de Apertura y Clausura, Atletismo.
          Parc des Princes:

          Eventos: Fútbol.
          Accor Arena:

          Eventos: Gimnasia y Artes Marciales.
          Grand Palais:

          Eventos: Esgrima.
          Champs-Élysées:

          Eventos: Ciclismo en Ruta.
          Place de la Concorde:

          Eventos: Triatlón.
          Parc des Expositions de Porte de Versailles:

          Eventos: Lucha, Judo y Taekwondo.
          Sedes en la Región Île-de-France:
          Vélodrome National (Saint-Quentin-en-Yvelines):

          Eventos: Ciclismo en Pista.
          Le Bourget:

          Eventos: Boxeo y Halterofilia.
          Palais des Congrès de Paris:

          Eventos: Deportes de Combate (Karate y Judo).
          Parc Asterix:

          Eventos: Deportes de Playa (Volleyball de Playa y Surf).
          Sedes Temporales y de Nuevas Construcciones:
          Arena La Défense:

          Eventos: Baloncesto y Voleibol.
          Olympic Village:

          Ubicación: Se construirá en la zona de Saint-Denis, cerca del Stade de France. Alojamiento para atletas y oficiales.
          Centro de Prensa Internacional:

          Ubicación: Cercano a las principales sedes para facilitar el acceso a los medios.
          Estas sedes destacan por su relevancia histórica, capacidad y ubicación estratégica para facilitar el acceso a los eventos y las experiencias olímpicas. La organización busca que los Juegos sean sostenibles y aprovechen al máximo las infraestructuras existentes y temporales.
        </p>
        <img
          src="/img/venues.jpg"
          alt="Sedes de los Juegos"
          className="venues-image"
          onClick={() => openModal('/img/venues.jpg')}
        />
      </section>

      <section id="athletes" className="athletes">
        <h2>Atletas Destacados en Diversos Deportes</h2>
        <p>
          <ul>
            A medida que se acercan los Juegos Olímpicos de 2024 en París, varios atletas se perfilan como favoritos y potenciales estrellas del evento. Aunque es difícil predecir con certeza quiénes dominarán en cada deporte, algunos nombres destacados incluyen:

            Atletas Destacados en Diversos Deportes:
            Atletismo:

            Armand Duplantis (Suecia): Actual campeón olímpico y mundial en salto con pértiga.
            Elaine Thompson-Herah (Jamaica): Medallista de oro en 100m y 200m en Tokio 2020.

            Natación:

            Caeleb Dressel (EE. UU.): Campeón olímpico en múltiples pruebas de estilo libre y mariposa en Tokio 2020.
            Katie Ledecky (EE. UU.): Dominante en pruebas de larga distancia, incluyendo 800m y 1500m libre.

            Gimnasia:

            Simone Biles (EE. UU.): Considerada una de las mejores gimnastas de todos los tiempos, con múltiples medallas de oro en Tokio 2020.
            Nadia Comăneci (Rumanía): Aunque se retiró hace tiempo, su legado y récords siguen influyendo en la gimnasia.

            Baloncesto:

            Giannis Antetokounmpo (Grecia): Estrella de la NBA y dos veces MVP.
            LeBron James (EE. UU.): Considerado uno de los mejores jugadores de baloncesto de todos los tiempos.

            Fútbol:

            Kylian Mbappé (Francia): Estrella del Paris Saint-Germain y campeón mundial con Francia en 2018.
            Lionel Messi (Argentina): Futbolista icónico y reciente ganador de la Copa Mundial de 2022.

            Ciclismo:

            Tadej Pogačar (Eslovenia): Campeón del Tour de Francia en 2020 y 2021.
            Egan Bernal (Colombia): Ganador del Tour de Francia en 2019.

            Esgrima:

            Gauthier Grumier (Francia): Medallista olímpico y uno de los principales esgrimistas del mundo.
            Ming Fei (China): Destacada en la espada y sable.

            Judo:

            Tina Trstenjak (Eslovenia): Campeona olímpica en la categoría de 63 kg.
            Shohei Ono (Japón): Medallista de oro en la categoría de 73 kg.
            Nuevas Estrellas y Promesas:
            Varios atletas jóvenes y emergentes en deportes como el surf, skateboarding y escalada deportiva, que hicieron su debut en Tokio 2020 y continúan ganando reconocimiento.
            A medida que se acerque la fecha de los Juegos, algunos atletas también pueden surgir como nuevas estrellas, y el rendimiento en los campeonatos mundiales y eventos clasificatorios
            dará una idea más clara de quiénes estarán en la cima en París 2024.

          </ul>
        </p>
        <img
          src="/img/athletes.jpg"
          alt="Atletas destacados"
          className="athletes-image"
          onClick={() => openModal('/img/athletes.jpg')}
        />
      </section>

      <section id="medals" className="medals">
        <h2>Medallero</h2>
        <p>
          ¡Absolutamente! Los Juegos Olímpicos de París 2024 fueron un evento deportivo lleno de emoción y récords.

          Los principales ganadores fueron:

          Estados Unidos: Dominó el medallero con un total de 126 medallas.
          China: Le siguió de cerca con 91 medallas.
          Japón: Completó el podio con 57 medallas.

          Otros países que destacaron fueron:

          Australia
          Francia (como país anfitrión)
          Países Bajos
          Gran Bretaña
          Corea del Sur

          Estrellas que brillaron en París:

          Mencionar a todas las estrellas sería imposible, pero algunos nombres que destacaron fueron:

          Sifan Hassan: La atleta etíope dominó las pruebas de fondo, llevándose múltiples medallas de oro.
          Raygun: La breaker australiana cautivó al mundo con su estilo único y se convirtió en una de las sensaciones de los Juegos.
          Harrie Lavreysen: El ciclista neerlandés demostró su dominio en el keirin, sumando otra medalla de oro a su palmarés.
          Li Wenwen: La halterofilista china estableció nuevos récords mundiales y dejó claro su dominio en la categoría de más de 81 kg.
          Yuka Kagami: La luchadora japonesa sorprendió a todos al llevarse el oro en la categoría de 76 kg libre femenino.

          Disciplinas con más medallas:

          Las disciplinas que concentraron el mayor número de preseas fueron:

          Natación: Como siempre, la natación fue una de las disciplinas más populares y con mayor cantidad de medallas en juego.
          Atletismo: Las pruebas de pista y campo siempre son un imán para el público, y París 2024 no fue la excepción.
          Gimnasia: La gimnasia artística y rítmica siempre ofrecen espectáculos de gran belleza y dificultad.

          Actuaciones sorprendentes:

          Hubo muchas actuaciones que dejaron a todos boquiabiertos, pero algunas que destacaron fueron:

          La victoria de Raygun en el breaking: La inclusión del breaking como deporte olímpico fue una gran novedad, y la victoria de Raygun fue un momento histórico.
          Los nuevos récords mundiales en halterofilia: Li Wenwen y otros atletas demostraron una fuerza sobrehumana, estableciendo nuevos límites en esta disciplina.
          Las sorpresas en la lucha: Vimos a muchos atletas menos conocidos dar la sorpresa y llevarse medallas inesperadas.
        </p>
        <img
          src="/img/medals.jpg"
          alt="Medallero"
          className="medals-image"
          onClick={() => openModal('/img/medals.jpg')}
        />
      </section>

      <section id="contact" className="contact">
        <h2>Contacto</h2>
        <p>
          Para más información, puedes contactarnos en:
          <ul>
            <li><strong>Email:</strong> arias.arlevy@olympics2024.com</li>
            <li><strong>Teléfono:</strong> +57 3015704678</li>
            <li><strong>Dirección:</strong> 1 Avenue de la République, 75011 París, Francia</li>
          </ul>
        </p>
      </section>

      <footer className="App-footer">
        <p> Arlevy arias &copy; 2024 Juegos Olímpicos | Todos los derechos reservados.</p>
      </footer>

      {modalIsOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="close-btn" onClick={closeModal}>&times;</span>
          <img src={modalImageSrc} alt="Ampliación" className="modal-image" />
        </div>
      )}
    </div>
  );
}

export default App;
