// validation/contact.js
export function validateContact(formData) {
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();
  
    const state = {
      name: { valeur: name, erreur: null },
      email: { valeur: email, erreur: null },
      message: { valeur: message, erreur: null }
    };
  
    let erreur = false;
  
    if (!name) {
      state.name.erreur = "Le nom est requis.";
      erreur = true;
    }
  
    if (!email || !email.includes("@")) {
      state.email.erreur = "Un email valide est requis.";
      erreur = true;
    }
  
    if (!message) {
      state.message.erreur = "Le message ne peut pas être vide.";
      erreur = true;
    }
  
    return [erreur, state];
  }
  