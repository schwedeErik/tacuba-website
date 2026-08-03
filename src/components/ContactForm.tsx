"use client";

import { useState, type FormEvent } from "react";
import { company } from "@/content/company";

export function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const subject = encodeURIComponent(`Contacto desde el sitio web — ${nombre}`);
    const body = encodeURIComponent(
      `Nombre: ${nombre}\nCorreo: ${email}\n\nMensaje:\n${mensaje}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 border border-line bg-white p-6 md:p-8"
      noValidate
    >
      <div>
        <label htmlFor="nombre" className="mb-1.5 block text-sm font-medium text-navy">
          Nombre *
        </label>
        <input
          id="nombre"
          name="nombre"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full rounded-md border border-line bg-mist px-3 py-2.5 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-line bg-mist px-3 py-2.5 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="mb-1.5 block text-sm font-medium text-navy">
          Mensaje *
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={6}
          maxLength={2000}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="w-full resize-y rounded-md border border-line bg-mist px-3 py-2.5 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20"
        />
        <p className="mt-1 text-xs text-ink-muted">
          {2000 - mensaje.length} caracteres restantes
        </p>
      </div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark sm:w-auto"
      >
        Enviar mensaje
      </button>
      <p className="text-xs text-ink-muted">
        Al enviar se abrirá su cliente de correo con el mensaje dirigido a{" "}
        {company.email}.
      </p>
    </form>
  );
}
