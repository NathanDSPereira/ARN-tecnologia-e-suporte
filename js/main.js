/* ==========================================================
   ARN Tecnologia & Suporte — configuração e comportamento
   Preencha os dados da empresa em CONFIG. O resto se ajusta sozinho.
   ========================================================== */

const CONFIG = {
  // WhatsApp: só números, com código do país e DDD. Ex.: "5511999999999"
  whatsapp: "55XXXXXXXXXXX",

  // Telefone para o botão "Ligar agora" (só números, com país e DDD)
  phone: "55XXXXXXXXXXX",
  // Telefone como aparece escrito na página
  phoneDisplay: "(XX) XXXXX-XXXX",

  email: "contato@seudominio.com.br",
  hours: "Seg a Sex, 8h às 18h",
  cities: "Sua cidade e região",
  responseTime: "poucos minutos",
  cnpj: "XX.XXX.XXX/0001-XX",
};

/* ---------- Não precisa mexer daqui para baixo ---------- */

// Links do WhatsApp (mensagem vem do atributo data-msg de cada botão)
document.querySelectorAll("[data-whatsapp]").forEach((el) => {
  const msg = el.dataset.msg || "Olá! Preciso de ajuda.";
  el.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  el.target = "_blank";
  el.rel = "noopener";
});

// Botão de ligar
document.querySelectorAll("[data-tel]").forEach((el) => {
  el.href = `tel:+${CONFIG.phone}`;
});

// Link de e-mail
document.querySelectorAll("[data-email]").forEach((el) => {
  el.href = `mailto:${CONFIG.email}`;
});

// Textos configuráveis: <span data-config="hours"></span>
document.querySelectorAll("[data-config]").forEach((el) => {
  const value = CONFIG[el.dataset.config];
  if (value) el.textContent = value;
});

// Ano do rodapé
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
