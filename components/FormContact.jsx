"use client";
import { useActionState, useRef, useEffect } from "react";
import { validateContact } from "@/validation/validateContact";
import { useTranslations } from 'next-intl';

export default function FormContact() {
  const t = useTranslations('contact');
  const formRef = useRef(null);

  const sendForm = async (prevState, formData) => {
    const [erreur, newState] = validateContact(formData);
    let status = null;
    if (!erreur) {
      try {
        const response = await fetch("https://formspree.io/f/myzwaajo", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
          }),
        });
        if (!response.ok) throw new Error();
        status = { type: "success", message: t('success') };
        setTimeout(() => { window.location.href = "/"; }, 2000);
        return { name: { valeur: "", erreur: null }, email: { valeur: "", erreur: null }, message: { valeur: "", erreur: null }, status };
      } catch {
        status = { type: "error", message: t('error') };
      }
    }
    return { ...newState, status };
  };

  const [formState, formAction] = useActionState(sendForm, {
    name: { valeur: "", erreur: null },
    email: { valeur: "", erreur: null },
    message: { valeur: "", erreur: null },
    status: null,
  });

  useEffect(() => {
    if (formState.status && formRef.current) formRef.current.scrollIntoView({ behavior: "smooth" });
  }, [formState.status]);

  return (
    <section id="contact" className="min-h-screen pt-14 border-b border-[#1e1e1e]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 h-full">

        {/* Gauche */}
        <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-[#1e1e1e] flex flex-col justify-center">
          <p className="text-[10px] tracking-[0.14em] uppercase text-[#444] mb-6">
            {t('title')}
          </p>
          <h2 className="text-5xl font-bold tracking-tight text-[#f0ede8] leading-tight mb-6">
            {t('together')}
          </h2>
          <p className="text-[13px] text-[#555] leading-relaxed max-w-sm">
            {t('description')}
          </p>
        </div>

        {/* Formulaire */}
        <div className="p-12 md:p-16 flex flex-col justify-center">
          <form ref={formRef} action={formAction} className="flex flex-col gap-10" noValidate>

            {[
              { name: 'name', label: t('name'), type: 'text', value: formState.name, placeholder: t('namePlaceholder') },
              { name: 'email', label: t('email'), type: 'email', value: formState.email, placeholder: t('emailPlaceholder') },
            ].map(({ name, label, type, value, placeholder }) => (
              <label key={name} className="flex flex-col gap-3">
                <span className="text-[10px] tracking-widest uppercase text-[#444]">{label}</span>
                <input
                  type={type}
                  name={name}
                  defaultValue={value.valeur}
                  placeholder={placeholder}
                  className="bg-transparent border-b border-[#2a2a2a] focus:border-[#555] py-2 text-[14px] text-[#f0ede8] placeholder-[#333] outline-none transition-colors duration-200"
                />
                {value.erreur && <span className="text-[11px] text-red-500">{value.erreur}</span>}
              </label>
            ))}

            <label className="flex flex-col gap-3">
              <span className="text-[10px] tracking-widest uppercase text-[#444]">{t('message')}</span>
              <textarea
                name="message"
                rows={4}
                defaultValue={formState.message.valeur}
                placeholder={t('messagePlaceholder')}
                className="bg-transparent border-b border-[#2a2a2a] focus:border-[#555] py-2 text-[14px] text-[#f0ede8] placeholder-[#333] outline-none resize-none transition-colors duration-200"
              />
              {formState.message.erreur && <span className="text-[11px] text-red-500">{formState.message.erreur}</span>}
            </label>

            <button
              type="submit"
              className="self-start px-8 py-3 bg-[#f0ede8] text-[#0d0d0d] text-[11px] font-bold tracking-widest uppercase rounded-sm hover:bg-white transition-colors duration-200"
            >
              {t('submit')} →
            </button>

            {formState.status && (
              <p className={`text-[12px] ${formState.status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                {formState.status.message}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}   