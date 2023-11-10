import React, { useRef, useState } from "react";

import "./disney.scss";

export default function Disney() {

    const input1Ref = useRef(null);

    const [errorHandler, setErrorHandler] = useState({
        email: {
            error: false,
            message: ""
        },
        password: {
            error: false,
            message: ""
        }
    });

    const handleEmail = (e) => {
        e.preventDefault();

        // Regex email test
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(e.target.value)) {
            setErrorHandler({
                ...errorHandler,
                email: {
                    error: true,
                    message: "No has ingresado un correo válido."
                }
            });
        } else {
            setErrorHandler({
                ...errorHandler,
                email: {
                    error: false,
                    message: ""
                }
            });
        }
    }

    const handlePassword = (e) => {
        e.preventDefault();

        if (e.target.value.length < 6) {
            setErrorHandler({
                ...errorHandler,
                password: {
                    error: true,
                    message: "Tu contraseña debe tener al menos 6 caracteres."
                }
            });
        }
        // Regex for at least 1 number inside the string
        const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
        if (!regex.test(e.target.value)) {
            setErrorHandler({
                ...errorHandler,
                password: {
                    error: true,
                    message: "Tu contraseña debe tener al menos 1 número y 1 letra."
                }
            });
        }
        else {
            setErrorHandler({
                ...errorHandler,
                password: {
                    error: false,
                    message: ""
                }
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const input1 = document.getElementById("input1").value;
        const input1RefValue = input1Ref.current.value;

        console.log(input1, input1RefValue);
    }

    return (
        <div className="disney">
            <h1>Disney</h1>
            {
                errorHandler.email.error && (
                    <div className="alertBar error">
                        {errorHandler.email.message}
                    </div>
                )
            }
            {
                errorHandler.password.error && (
                    <div className="alertBar error">
                        {errorHandler.password.message}
                    </div>
                )
            }
            <form onSubmit={handleSubmit}>
                <input type="text" id="input1" placeholder="Email" onBlur={handleEmail} onFocus={() => console.log("Focus")} onChange={() => console.log("Change")} />
                <input type="password" ref={input1Ref} placeholder="Contraseña" onBlur={handlePassword} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}