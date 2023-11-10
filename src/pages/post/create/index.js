import React, { useState } from "react";

import "./styles.scss";

export default function PostCreate() {
    const [valid, setValid] = useState({
        title: false,
        author: false,
        content: false
    });

    const isValid = (valid.title && valid.author && valid.content);

    const handleTitle = (e) => {
        e.preventDefault();

        const value = e.target.value;
        if (value.length < 5) {
            alert("El titulo debe tener al menos 5 caracteres.");
            setValid({
                ...valid,
                title: false
            });
        } else {
            setValid({
                ...valid,
                title: true
            });
        }
    }

    const handleAuthor = (e) => {
        e.preventDefault();

        const value = e.target.value;
        if (value === "0") {
            alert("Debes seleccionar un autor.");
            setValid({
                ...valid,
                author: false
            });
        }
        else {
            setValid({
                ...valid,
                author: true
            });
        }
    }

    const handleContent = (e) => {
        e.preventDefault();

        const value = e.target.value;
        if (value.length < 20) {
            alert("El contenido debe tener al menos 20 caracteres.");
            setValid({
                ...valid,
                content: false
            });
        } else {
            setValid({
                ...valid,
                content: true
            });
        }
    }

    const validateForm = (e) => {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const content = document.getElementById("content").value;

        if (title.length < 5) {
            alert("El titulo debe tener al menos 5 caracteres.");
        }

        if (author === "0") {
            alert("Debes seleccionar un autor.");
        }

        if (content.length < 20) {
            alert("El contenido debe tener al menos 20 caracteres.");
        }

        if (title.length >= 5 && author !== "0" && content.length >= 20) {
            alert("Blog creado correctamente.");
        }

        const data = {
            title,
            author,
            content
        }

        console.log(data);
    }

    return (
        <div className="container">
            <h1>Blog</h1>
            <div className="formContain">
                <form onSubmit={validateForm}>
                    <div className="formGroup">
                        <label>Titulo</label>
                        <input type="text" placeholder="Titulo del blog" id={"title"} onBlur={handleTitle} />
                    </div>
                    <div className="formGroup">
                        <label>Autor</label>
                        <select id={"author"} onBlur={handleAuthor}>
                            <option value="1">Autor 1</option>
                            <option value="2">Autor 2</option>
                            <option value="3">Autor 3</option>
                        </select>
                    </div>
                    <div className="formGroup">
                        <label>Contenido</label>
                        <textarea placeholder="Contenido del blog" id={"content"} onBlur={handleContent}/>
                    </div>
                    <div className="formGroup">
                        <button type="submit" disabled={!isValid}>Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}