import styles from "@/components/Footer.module.css";
import github from "@/public/github2.png";
import linkedin from "@/public/linkedin.png";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations("footer");

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.text}>
                    &copy; {new Date().getFullYear()} Tahar OURDANI. {t("rights")}
                </p>

                <div className={styles.socials}>
                    <a
                        href="https://github.com/tahxr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={github} alt="GitHub" width={24} height={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/tahar-ourdani-785bb320b/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image src={linkedin} alt="LinkedIn" width={24} height={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
