<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contacto</title>

  <link rel="stylesheet" href="Untitled-1.3B.css" />
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />

  <style>
body {
      background-color: rgb(0, 0, 0);
      font-family: 'Orbitron', sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .navbar {
      width: 100%;
      background-color: black;
      padding: 15px 0;
      text-align: center;
    }

    .nav-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: center;
    }

    .nav-list li {
      margin: 0 20px;
    }

    .nav-list a {
      color: yellow;
      text-decoration: none;
      font-size: 18px;
      font-weight: bold;
      transition: color 0.3s;
    }

    .nav-list a:hover {
      color: darkred;
    }

    .form-container {
      background: rgba(255, 255, 255, 0.9);
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      width: 400px;
      text-align: center;
      margin-top: 50px;
    }

    h1 {
      color: white;
      margin-top: 40px;
      margin-bottom: 20px;
    }

    h2 {
      color: black;
    }

    label {
      font-weight: bold;
      display: block;
      margin-top: 15px;
      color: black;
      text-align: left;
    }

    input,
    textarea {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-family: 'Orbitron', sans-serif;
      font-size: 14px;
    }

    button {
      width: 100%;
      padding: 12px;
      background: black;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      margin-top: 20px;
      transition: background 0.3s;
    }

    button:hover {
      background: darkred;
    }
  </style>
</head>

<body>

    <nav class="navbar">
        <ul class="nav-list">
          <li><a href="Untitled-1.4.html">Inicio</a></li>
          <li><a href="Acerca de.html">Acerca de</a></li>
          <li><a href="contacto.html">Contacto</a></li>
        </ul>
      </nav>

    <h1>Contacto</h1>

    <div class="form-container">
        <h2>Formulario</h2>
        <form onsubmit="enviarFormulario(event)">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" placeholder="Ingrese nombre" required />
          
    
          <label for="telefono">Teléfono:</label>
          <input type="tel" id="telefono" placeholder="telefono" required />
    
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" placeholder="email" required />
    
          <label for="titulo">Título:</label>
          <input type="text" id="titulo" placeholder="titulo" required />
    
          <label for="motivo">Motivo de Contacto:</label>
          <textarea id="motivo" placeholder="motivo" rows="4" required></textarea>
    
          <button type="submit">Enviar</button>
        </form>
      </div>

      <script>
        function enviarFormulario(event) {
          event.preventDefault(); // Previene el envío real del formulario
    
          const nombre = document.getElementById("nombre").value.trim();
          const telefono = document.getElementById("telefono").value.trim();
          const email = document.getElementById("email").value.trim();
          const titulo = document.getElementById("titulo").value.trim();
          const motivo = document.getElementById("motivo").value.trim();
         
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(email))
          if (!nombre || !telefono || !email || !titulo || !motivo) {
            alert("Por favor, completa todos los campos.");
            return;
          }
    
          const resumen = `
    📝 Detalle del formulario:
    
    - Nombre: ${nombre}
    - Teléfono: ${telefono}
    - Correo Electrónico: ${email}
    - Título: ${titulo}
    - Motivo de Contacto: ${motivo}
    `;
    
          alert(resumen);
        }
      </script>



</body>
</html>



