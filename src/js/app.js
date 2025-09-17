import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables);

  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // Datos de texto (si son null, ponemos algo por defecto)
  let name = variables.name !== null ? variables.name : "Lucy";
  let lastName = variables.lastName !== null ? variables.lastName : "Boilett";
  let role = variables.role !== null ? variables.role : "Web Developer";
  let city = variables.city !== null ? variables.city : "Miami";
  let country = variables.country !== null ? variables.country : "USA";

  let twitter = "#";
  if (
    variables.twitter &&
    variables.twitter.startsWith("https://twitter.com/")
  ) {
    twitter = variables.twitter;
  }

  let github = "#";
  if (variables.github && variables.github.startsWith("https://github.com/")) {
    github = variables.github;
  }

  let linkedin = "#";
  if (
    variables.linkedin &&
    variables.linkedin.startsWith("https://linkedin.com/")
  ) {
    linkedin = variables.linkedin;
  }

  let instagram = "#";
  if (
    variables.instagram &&
    variables.instagram.startsWith("https://instagram.com/")
  ) {
    instagram = variables.instagram;
  }

  // Reset del contenido HTML con los nuevos valores
  document.querySelector("#widget_content").innerHTML = `
    <div class="widget">
      ${cover}
      <img src="${variables.avatarURL}" class="photo" />
      <h1>${name} ${lastName}</h1>
      <h2>${role}</h2>
      <h3>${city}, ${country}</h3>
      <ul class="${variables.socialMediaPosition}">
        <li><a href="${twitter}"><i class="fab fa-twitter"></i></a></li>
        <li><a href="${github}"><i class="fab fa-github"></i></a></li>
        <li><a href="${linkedin}"><i class="fab fa-linkedin"></i></a></li>
        <li><a href="${instagram}"><i class="fab fa-instagram"></i></a></li>
      </ul>
    </div>
  `;
}

/**
 * Don't change any of the lines below
 */
window.onload = function() {
  window.variables = {
    includeCover: true,
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    socialMediaPosition: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables);

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      const attribute = e.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values));
    });
  });
};
