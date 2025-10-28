// script.js — simples validação e feedback visual
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('vipForm');
  const overlay = document.getElementById('success');
  const closeBtn = document.getElementById('closeSuccess');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // HTML5 validity check
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Phone basic cleanup and validation (digits only)
    const whatsapp = document.getElementById('whatsapp').value || '';
    const digits = whatsapp.replace(/\D/g, '');
    if (digits.length < 8) {
      alert('Por favor, informe um número de WhatsApp válido (com DDD).');
      return;
    }

    // Aqui você pode enviar os dados para sua API ou provider (ex: Formspree, Google Sheets, sua backend)
    const data = {
      concurso: document.getElementById('concurso').value,
      tempo: document.getElementById('tempo').value,
      obstaculo: document.getElementById('obstaculo').value,
      nome: document.getElementById('nome').value,
      email: document.getElementById('email').value,
      whatsapp: digits
    };

    // Exemplo: console (remova em produção)
    console.info('Dados do formulário (enviar para servidor):', data);

    // Mostrar overlay de sucesso
    overlay.setAttribute('aria-hidden', 'false');

    // reset do form após pequeno delay (melhor UX)
    setTimeout(() => form.reset(), 300);
  });

  closeBtn.addEventListener('click', () => {
    overlay.setAttribute('aria-hidden', 'true');
    // foco para acessibilidade
    document.getElementById('nome').focus();
  });

  // fechar overlay ao clicar fora do card
  overlay.addEventListener('click', (ev) => {
    if (ev.target === overlay) {
      overlay.setAttribute('aria-hidden', 'true');
      document.getElementById('nome').focus();
    }
  });
});