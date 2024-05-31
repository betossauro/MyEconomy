const API_URL = 'http://localhost';

// faz req para retornar as tarefas do banco. Retorna array com objetos
export const listarLimites = async () => {
  const response = await fetch(`${API_URL}/?acao=listar`);
  return response.json();
};

// req para inserir tarefa. Recebe objeto de tarefa, e retorna a tarefa inserida já com ID
export const adicionarLimiteMes = async (tarefa) => {
  const response = await fetch(`${API_URL}/?acao=adicionar`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(tarefa)
  });
  return response.json();
};

// req para editar a tarefa. Recebe a tarefa, e retorna a tarefa atualizada
export const editarLimiteMes = async (tarefa) => {
  const response = await fetch(`${API_URL}/?acao=editar`, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(tarefa)
  });
  return response.json();
};

// req para excluir a tarefa. Recebe ID e não retorna nenhum objeto
export const excluirLimiteMes = async (id) => {
  const response = await fetch(`${API_URL}/?acao=deletar&id=${id}`);
  return response.json();
}