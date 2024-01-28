export const validation = (datos) => {
  let errors = {};

  if (!datos.forename) errors.forename = "Por favor ingresa un nombre";
  if (!datos.surname) errors.surname = "Por favor ingresa un apellido";
  if (!datos.description)
    errors.description = "Por favor ingresa un descripcion";
  if (!datos.image) errors.image = "Por favor ingresa una imagen";
  if (!datos.nationality)
    errors.nationality = "Por favor ingresa una nacionalidad";
  if (!datos.dob) errors.dob = "Por favor ingresa una fecha de nacimiento";
  if (!datos.teams) errors.teams = "Por favor ingresa uno/s team/s";

  if (datos.forename.length > 15)
    errors.forename = "El nombre solo puede contener hasta 15 caracteres";

  if (datos.surname.length > 15)
    errors.surname = "El apellido solo puede contener hasta 15 caracteres";

  if (datos.description.length > 100)
    errors.description =
      "La descripcion solo puede contener hasta 100 caracteres";

  if (datos.nationality.length > 30)
    errors.nationality =
      "La nacionalidad con mas caracteres tiene 30 caracteres, por lo que solo se permiten 30 caracteres";

  if (!/^\d{4}\/\d{2}\/\d{2}$/.test(datos.dob))
    errors.dob = "Formato de fecha invalido.";

  if (datos.teams.length > 50)
    errors.teams = "Solo se permiten hasta 50 caracteres";

  return errors;
};
