// Mensaje al enviar formulario

function msjEnviado() {
  var remitente = document.getElementById("nombre").value;

  alert("¡Gracias " + remitente + " por contactarme! Me pondré en contacto a la brevedad");
}

// Poner en blanco el formulario después de enviar

function resetForm() {
  document.contactForm.reset();
}
