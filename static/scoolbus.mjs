function togglePassword() {
  const passwordInput = document.getElementById("password");
  const eyeIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.textContent = "🙈"; // Change l'icône
  } else {
    passwordInput.type = "password";
    eyeIcon.textContent = "👁️"; // Remet l'icône d'œil
  }
}


// Tableau de quêtes
const quetes = [
  { nom: "Trouver l'épée", description: "Récupérer l'épée magique", statut: "En cours" },
  { nom: "Sauver le village", description: "Protéger le village d'Orc", statut: "Terminée" },
  { nom: "Quête de niveau max", description: "Capturer yanis", statut: "chec" },
  ];

  // Référence au tbody du tableau
  const tbody = document.querySelector("#tableQuetes tbody");

  // Générer les lignes
  quetes.forEach((quete, index) => {
  const tr = document.createElement("tr");


  tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${quete.nom}</td>
      <td>${quete.description}</td>
      <td class="${quete.statut === 'Terminée' ? 'terminee' : 'encours'}">${quete.statut}</td>
  `;

  // tbody.appendChild(tr);
  });