const supabase = window.supabase.createClient(
  "COLE_SUA_URL",
  "COLE_SUA_ANON_KEY"
);

// TROCAR TELAS
function showCadastro(){
  login.classList.add("hidden");
  cadastro.classList.remove("hidden");
}

function showLogin(){
  cadastro.classList.add("hidden");
  login.classList.remove("hidden");
}

// LOGIN
async function login(){
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const { error } = await supabase.auth.signInWithPassword({
    email, password: senha
  });

  if(error){
    alert(error.message);
  } else {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
  }
}

// CADASTRO
async function cadastrar(){
  const email = document.getElementById("email_cad").value;
  const senha = document.getElementById("senha_cad").value;

  const { error } = await supabase.auth.signUp({
    email, password: senha
  });

  if(error){
    alert(error.message);
  } else {
    alert("Conta criada!");
    showLogin();
  }
}

// AGENDAR
async function agendar(){
  const nome = document.getElementById("nome").value;
  const servico = document.getElementById("servico").value;
  const horario = document.getElementById("horario").value;

  const { error } = await supabase
    .from("agendamentos")
    .insert([{ nome, servico, horario, status: "pendente" }]);

  if(error){
    alert(error.message);
  } else {
    alert("Agendado com sucesso!");
  }
}

// LOGOUT
function logout(){
  document.getElementById("app").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");
}
