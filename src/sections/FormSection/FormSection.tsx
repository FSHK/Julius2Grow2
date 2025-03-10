'use client';

import React, {useState} from "react";
import styles from "./FormSection.module.scss";
import bottomImage from "./../../../public/images/formSection/Background_termitas_form.svg";
import Image from "next/image";
import {useRouter} from "next/navigation";

interface FormData {
    name_field: string;
    email_field: string;
    phone_field: string;
    municipio_field: string;
    solution_type_field: string;
    how_can_we_help_field: string;
    accepted_tc: boolean;
}

const FormSection: React.FC = () => {
    const router = useRouter();

    const [formData, setFormData] = useState<FormData>({
        name_field: "",
        email_field: "",
        phone_field: "",
        municipio_field: "",
        solution_type_field: "",
        how_can_we_help_field: "",
        accepted_tc: false,
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const {name, value, type, checked} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        router.push("/thank-you")
    };

    return (
        <div className={styles.sectionForm}>
            <div className={styles.contenForm}>
                <div className={styles.formSectionSubTitle}>¡Actúa ahora!</div>
                <div className={styles.formSectionTitle}>
                    Actúa ahora, Protege tu hogar y <br className={styles.smHide}/> recupera tu tranquilidad
                </div>
            </div>
            <div className={styles.sectionFormContent}>
                <div className={`${styles.formBlock} w-form`}>
                    <form id="email-form" name="email-form" onSubmit={handleSubmit} aria-label="Email Form">
                        <div className={styles.form}>
                            <div className={styles.formHeaderWrapper}>
                                <div className={styles.formSubTitle}>
                                    No esperes a que los daños sean irreversibles
                                </div>
                                <div className={styles.formTitle}>Contáctanos hoy mismo para una consulta gratuita.
                                </div>
                                <div className={styles.formSubTitle}>
                                    Toma el primer paso para liberar tu hogar de termitas.
                                </div>
                            </div>
                            <div className={styles.inputForm}>
                                <div className={styles.groupInput}>
                                    <div className={styles.formInputLabel}>Nombre*</div>
                                    <input
                                        className={`${styles.formFieldInput} name_field `}
                                        name="name_field"
                                        placeholder="Ingrese su Nombre"
                                        type="text"
                                        value={formData.name_field}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.groupRowInputWrapper}>
                                    <div className={`${styles.groupInput} ${styles.xlCol6}`}>
                                        <div className={styles.formInputLabel}>Correo*</div>
                                        <input
                                            className={`${styles.formFieldInput}`}
                                            // className={`${styles.formFieldInput}`}
                                            name="email_field"
                                            placeholder="Ingrese su correo corporativo"
                                            type="email"
                                            value={formData.email_field}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={`${styles.groupInput} ${styles.xlCol6}`}>
                                        <div className={styles.formInputLabel}>Teléfono*</div>
                                        <input
                                            className={`${styles.formFieldInput}`}
                                            name="phone_field"
                                            placeholder="Ingrese su telefono"
                                            type="tel"
                                            value={formData.phone_field}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={styles.groupRowInputWrapper}>
                                    <div className={`${styles.groupInput} ${styles.xlCol6}`}>
                                        <div className={styles.formInputLabel}>Municipio*</div>
                                        <input
                                            className={`${styles.formFieldInput}`}
                                            name="municipio_field"
                                            placeholder="Ingrese tu municipio"
                                            type="text"
                                            value={formData.municipio_field}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={`${styles.groupInput} ${styles.xlCol6}`}>
                                        <div className={styles.formInputLabel}>Tipo de solución</div>
                                        <select
                                            id="solution_type_field"
                                            name="solution_type_field"
                                            value={formData.solution_type_field}
                                            onChange={handleChange}
                                            className={`${styles.formFieldInput}`}
                                        >
                                            <option value="">Selecciona una opción</option>
                                            <option value="First">First choice</option>
                                            <option value="Second">Second choice</option>
                                            <option value="Third">Third choice</option>
                                        </select>
                                    </div>
                                </div>
                                <div className={styles.groupInput}>
                                    <div className={styles.formInputLabel}>¿Cómo te podemos ayudar?</div>
                                    <textarea
                                        id="how_can_we_help_field"
                                        name="how_can_we_help_field"
                                        placeholder="Ingrese su Nombre"
                                        className={`${styles.formFieldInput} ${styles.textAreaInput}`}
                                        value={formData.how_can_we_help_field}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.formTc}>
                                    <label className={styles.wCheckbox}>
                                        <div className={`${styles.checkbox} ${styles.wCheckboxInput}`}>
                                            <input
                                                type="checkbox"
                                                id="customCheckbox"
                                                className={styles.hideCheckbox}
                                                name="accepted_tc"
                                                checked={formData.accepted_tc}
                                                onChange={handleChange}
                                                required
                                            />
                                            <label htmlFor="customCheckbox" className={styles.customCheckbox}></label>
                                        </div>


                                        <span className={`${styles.formTcDisclaimer} ${styles.wFormLabel} }`}>
                                            Acepto el&nbsp;<span
                                            className={styles.textLink}>Aviso de Privacidad</span> y <span
                                            className={styles.textLink}>Términos y Condiciones</span>, así como las Políticas de Cookies.
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className={styles.actionsForm}>
                                <input
                                    type="submit"
                                    id="contact-us-submit-btn"
                                    className={`${styles.submitBtn} ${styles.wBtn}`}
                                    value="Enviar"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`${styles.smHide} ${styles.bottomImageMd}`}>
                <Image
                    src={bottomImage}
                    loading="lazy"
                    alt=""
                />
            </div>
            <div className={styles.bottomImageSm}></div>
        </div>
    );
};

export default FormSection;
