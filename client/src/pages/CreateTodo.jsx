import { useState, useEffect } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function handelSubmit(e) {
        e.preventDefault();
        const response = await fetch("/todos", {
            method:"POST",
            credentials:"same-origin",
            headers: {
                "Content-Type": "application/json",
            }
        })
    }
}