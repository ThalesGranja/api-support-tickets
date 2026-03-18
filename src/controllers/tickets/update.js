export function update({ request, response, database }) {
  const { id } = request.params
  const { equipment, description } = request.body

  database.update("tickets", id, {
    equipment,
    description,
    updated_at: new Date(),
  })

  return response.end()
}
/*
{
    "id": "be8f795b-cb0c-4894-871e-5134947241cd",
    "equipment": "Impressora",
    "description": "Impressora imprimindo folha inteira preta no xerox.",
    "user_name": "Erika Paccola",
    "status": "open",
    "created_at": "2026-03-17T23:33:38.695Z",
    "updated_at": "2026-03-17T23:33:38.695Z"
  }
*/