export function updateStatus({ request, response, database }) {
  const { id } = request.params
  const { solution } = request.body

  database.update("tickets", id, { status: "closed", solution })

  return response.end()
}
/*
{
  "id": "be8f795b-cb0c-4894-871e-5134947241cd",
  "equipment": "Mouse",
  "description": "Mouse está falhando.",
  "user_name": "Erika Paccola",
  "status": "closed",
  "created_at": "2026-03-17T23:33:38.695Z",
  "updated_at": "2026-03-18T23:41:06.752Z"
}
*/