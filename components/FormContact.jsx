"use client";

import { useActionState, useRef, useEffect } from "react";
import { validateContact } from "@/validation/validateContact";
import { useTranslations } from 'next-intl';
import styles from "./FormContact.module.css";

export default function FormContact() {
    const t = useTranslations('contact');
    const formRef = useRef(null);

    const sendForm = async (prevState, formData) => {
        const [erreur, newState] = validateContact(formData);
        let status = null;

        if (!erreur) {
            const data = {
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message"),
            };

            try {
                const response = await fetch("https://formspree.io/f/myzwaajo", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify(data),
                });

                if (!response.ok) {
                    throw new Error("Submission failed");
                }

                status = { type: "success", message: t('success') };
                setTimeout(() => {
                    window.location.href = "/";
                }, 2000);
                return {
                    name: { valeur: "", erreur: null },
                    email: { valeur: "", erreur: null },
                    message: { valeur: "", erreur: null },
                    status,
                };

            } catch (err) {
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
        if (formState.status && formRef.current) {
            formRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [formState.status]);

    return (
        <>
            <h2 className={styles.h2}>{t('title')}</h2>
            <p className={styles.description}>{t('description')}</p>

            <form ref={formRef} action={formAction} className={styles.form} noValidate>
                <label className={styles.label}>
                    {t('name')}
                    <input
                        className={styles.input}
                        type="text"
                        name="name"
                        defaultValue={formState.name.valeur}
                    />
                    <div className={styles.erreur}>{formState.name.erreur}</div>
                </label>

                <label className={styles.label}>
                    {t('email')}
                    <input
                        className={styles.input}
                        type="email"
                        name="email"
                        defaultValue={formState.email.valeur}
                    />
                    <div className={styles.erreur}>{formState.email.erreur}</div>
                </label>

                <label className={styles.label}>
                    {t('message')}
                    <textarea
                        className={styles.textarea}
                        name="message"
                        rows="5"
                        defaultValue={formState.message.valeur}
                    ></textarea>
                    <div className={styles.erreur}>{formState.message.erreur}</div>
                </label>

                <button className={styles.button} type="submit">{t('submit')}</button>

                {formState.status && (
                    <div className={
                        formState.status.type === "success"
                            ? styles.successMessage
                            : styles.errorMessage
                    }>
                        {formState.status.message}
                    </div>
                )}
            </form>
        </>
    );
}
