export const tickets = [
  {
    method: "POST",
    path: "/tickets",
    controller: (reqiest, response) => {
      response.end("Criado com sucesso!")
    }
  }
]