import React, { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import ClientCaptcha from "react-client-captcha";
import { useTranslation } from 'react-i18next';

export const Captcha = forwardRef((props, ref) => {
    
    const [code, setCode] = useState(null);
    const reference = useRef();
    const inputRef = useRef();
    const [t] = useTranslation();

    useImperativeHandle(ref, () => ({
            refresh() {
                reference.current.generateCaptcha();
                inputRef.current.value = "";
            }
        })
    )

    const onCaptchaChange = (e) => {
        if (code && code === e.target.value) {
            props.callback(true);
        } else {
            props.callback(false);
        }
    }

    return (
        <div className="captcha-wrapper">
            <ClientCaptcha
                ref={reference}
                captchaCode={code => setCode(code)}
                charsCount={6}
                fontColor="#222"
                width={300}
                retryIconSize={16}
                backgroundColor="#F3F9FF"
                chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
                />
            <p>{t('form.label.captcha-entry-text')}</p>
            <input type="text" 
                maxLength="6"
                className="form-control"
                ref={inputRef}
                onChange={onCaptchaChange} />
        </div>
    );
})